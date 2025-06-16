import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import distros, { type Distro } from "@/data/distros";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FaHeart, FaRedo, FaShareAlt, FaSpinner, FaCheck, FaDownload } from "react-icons/fa";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import questions from "@/data/questions";
import DistroTechnicalDetails from "./DistroTechnicalDetails";

// Calculate result based on accumulated traits
const calculateResult = (answers: Record<number, string>) => {
  const traitScores: Record<string, number> = {};
  distros.forEach(distro => {
    traitScores[distro.id] = 0;
  });

  Object.values(answers).forEach((answer, index) => {
    const traits = questions[index].options.find((option) => option.id === answer)?.traits || {}
    Object.entries(traits).forEach(([distro, points]) => {
      traitScores[distro] += points;
    });
  });

  // Return distro with highest score
  const distroId = Object.entries(traitScores).sort((a, b) => b[1] - a[1])[0][0]
  console.log(traitScores)
  const result = distros.find((distro) => distro.id == distroId)
  return result || distros[0];
};

interface ResultScreenProps {
  answers: Record<number, string>;
  onRetake: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ answers, onRetake }) => {
  const [result, setResult] = useState<Distro | null>(null);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  useEffect(() => {
    // Simulate calculation delay
    const timer = setTimeout(() => {
      const distroResult = calculateResult(answers);
      setResult(distroResult);

      // Generate shareable URL
      const baseUrl = window.location.origin + window.location.pathname;
      const shareableUrl = `${baseUrl}?distro=${distroResult.id}`;
      setShareUrl(shareableUrl);
    }, 1000);

    return () => clearTimeout(timer);
  }, [answers]);

  const handleCopyResult = () => {
    if (result) {
      const resultText = `I got ${result.name} on the Linux Distro Personality Quiz! ${shareUrl}`;
      navigator.clipboard.writeText(resultText);
      setCopied(true);
      setShowCopiedAlert(true);
      setTimeout(() => {
        setCopied(false)
        setShowCopiedAlert(false);
      }, 2000);
    }
  };

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Analyzing your answers...</CardTitle>
            <CardDescription className="mt-2">
              Calculating your perfect Linux match
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-l-4 my-6"></div>
          </CardContent>
          <CardFooter className="justify-center">
            <div className="font-mono text-sm text-zinc-50 bg-zinc-800 p-4 rounded-lg w-full">
              <p className="mb-2">$ ./distro_matcher --user-profile</p>
              <div className="inline-flex items-center">
                <FaSpinner className="mr-3 animate-spin" />
                <span>Processing personality traits</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">

      {/* Copied Alert */}
      {showCopiedAlert && (
        <Alert className="fixed top-4 left-4 right-4 md:left-auto md:right-4 md:w-1/3 border-zinc-900 z-50">
          <AlertTitle>Copied to clipboard!</AlertTitle>
          <AlertDescription>
            Share your Linux distro match with friends
          </AlertDescription>
        </Alert>
      )}

      <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-4xl">
          <Card>
            {/* Result header */}
            <CardHeader className="flex flex-col justify-center *:mx-auto">
              <CardTitle className="text-2xl md:text-4xl font-bold">
                {result.id === "macos"
                  && ("Your Personality Match Is...")
                  || ("Your Linux Personality Match Is...")}
              </CardTitle>

              {/* ASCII Art Logo */}
              <div className="font-mono font-bold text-xs md:text-sm leading-4 whitespace-pre mb-4">{result.ascii || result.name}</div>

              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-3xl md:text-5xl font-bold">
                {result.name}
              </motion.h2>

              <CardDescription className="text-xl max-w-3xl text-center">
                {result.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* Personality insights */}
              <div className="px-8">
                <div className="max-w-3xl mx-auto">

                  {/* Traits */}
                  <CardTitle className="text-xl font-bold mb-4 text-center">Your Key Traits</CardTitle>
                  <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {result.traits.map((trait: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
                      >
                        <Badge className="px-2 text-sm">
                          {trait.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {result.note && <result.note />}

                  {/* Technical details accordion */}
                  <Accordion type="single" collapsible className="border rounded-lg">
                    <AccordionItem value="technical">
                      <AccordionTrigger className="text-lg font-bold px-6 flex items-center">
                        Technical Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <DistroTechnicalDetails distro={result} />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                </div>
              </div>
            </CardContent>

            {/* Action buttons */}
            <CardFooter className="flex-col px-16">
              {/* Shareable link */}
              <Card className="py-4 mb-8 w-full">
                <CardHeader>
                  <CardTitle className="text-lg font-bold">Share Your Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex-1">
                      <Label htmlFor="share-url" className="sr-only">Share URL</Label>
                      <Input
                        id="share-url"
                        value={shareUrl}
                        readOnly
                        className="truncate"
                      />
                    </div>
                    <Button
                      onClick={handleCopyResult}
                      className="min-w-[120px]"
                    >
                      {copied ? (
                        <>
                          <FaCheck className="mr-2" /> Copied!
                        </>
                      ) : (
                        <>
                          <FaShareAlt className="mr-2" /> Copy Link
                        </>
                      )}
                    </Button>


                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <FaDownload className="mr-2" /> Save Result
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Save Your Result</DialogTitle>
                          <DialogDescription>
                            Download your Linux distro match as an image
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="bg-zinc-800 p-4 rounded-lg border border-zinc-700 text-center">
                            <p className="text-zinc-50 mb-4">
                              Your result will be saved as a PNG image that you can share on social media
                            </p>
                            <Button variant="secondary">
                              <FaDownload className="mr-2" /> Download Image
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                  </div>
                </CardContent>
              </Card>
              <Button
                onClick={onRetake}
              >
                <FaRedo className="mr-2" />
                Retake Quiz
              </Button>



              <Separator className="my-4" />

              {/* Footer */}
              <div className="py-4 text-center">
                <p className="inline-flex items-center">
                  Made with
                  <FaHeart className="mx-2" />
                  for the Linux community
                </p>
              </div>

            </CardFooter>

          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResultScreen;
