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
import { FaHeart, FaRedo, FaShareAlt, FaChevronDown, FaChevronUp, FaSpinner, FaCheck } from "react-icons/fa";

// Mock function to calculate result - in real app this would use trait scoring
const calculateResult = () => {
  // For demo purposes
  return distros[0];
};

interface ResultScreenProps {
  answers: Record<number, string>;
  onRetake: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ answers, onRetake }) => {
  const [result, setResult] = useState<Distro | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    // Simulate calculation delay
    const timer = setTimeout(() => {
      const distroResult = calculateResult();
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
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!result) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-4">
        <Card className="w-full max-w-md bg-gray-800/70 backdrop-blur-lg border-gray-700/50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white">Analyzing your answers...</CardTitle>
            <CardDescription className="text-gray-400 mt-2">
              Calculating your perfect Linux match
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500 mb-6"></div>
          </CardContent>
          <CardFooter className="justify-center">
            <div className="font-mono text-sm text-green-400 bg-gray-800/50 p-4 rounded-lg w-full">
              <p className="mb-2">$ ./distro_matcher --user-profile</p>
              <div className="flex">
                <FaSpinner className="mr-3 animate-spin" />
                <span className="text-blue-400">Processing personality traits</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 flex justify-center">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-4xl">
          <Card>
            {/* Result header */}
            <CardHeader className="flex flex-col justify-center *:mx-auto">
              <CardTitle className="text-2xl md:text-4xl font-bold">Your Linux Personality Match Is...</CardTitle>

              {/* ASCII Art Logo */}
              <div className="font-mono text-xs md:text-sm leading-[1.2] whitespace-pre">{result.ascii || result.name}</div>

              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-3xl md:text-5xl font-bold">
                {result.name}
              </motion.h2>

              <CardDescription className="text-xl max-w-2xl">
                {result.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* Personality insights */}
              <div className="p-8">
                <div className="max-w-3xl mx-auto">
                  <CardTitle className="text-2xl font-bold mb-6 text-center">Why {result.name} is Your Perfect Match</CardTitle>

                  <motion.div className="p-6 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
                    <p className="text-lg">{result.personality}</p>
                  </motion.div>

                  {/* Traits */}
                  <CardTitle className="text-xl font-bold mb-4">Your Key Traits</CardTitle>
                  <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {result.traits.map((trait: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
                      >
                        <Badge className="px-4 py-2">
                          {trait.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Distro details toggle */}
                  <div className="text-center mb-8">
                    <Button
                      onClick={() => setShowDetails(!showDetails)}
                      variant="ghost"
                    >
                      {showDetails ? 'Hide Technical Details' : 'Show Technical Details'}
                      {showDetails ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                    </Button>
                  </div>

                  {/* Technical details */}
                  <AnimatePresence>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-xl font-bold">
                              About {result.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="font-bold mb-2">Package Manager</h5>
                                <p className="mb-4">
                                  {result.id === "ubuntu" || result.id === "mint"
                                    ? "APT (Advanced Package Tool)"
                                    : result.id === "fedora"
                                      ? "DNF (Dandified YUM)"
                                      : result.id === "arch"
                                        ? "Pacman"
                                        : result.id === "kali"
                                          ? "APT (Advanced Package Tool)"
                                          : result.id === "tails"
                                            ? "APT (Advanced Package Tool)"
                                            : "Portage"}
                                </p>

                                <h5 className="font-bold mb-2">Release Cycle</h5>
                                <p>
                                  {result.id === "ubuntu"
                                    ? "Every 6 months (interim), every 2 years (LTS)"
                                    : result.id === "arch"
                                      ? "Rolling release"
                                      : result.id === "fedora"
                                        ? "Approximately every 6 months"
                                        : result.id === "mint"
                                          ? "Every 6 months"
                                          : result.id === "kali"
                                            ? "Rolling release"
                                            : result.id === "tails"
                                              ? "Every 6 months"
                                              : "Rolling release"}
                                </p>
                              </div>

                              <div>
                                <h5 className="font-bold mb-2">Default Desktop</h5>
                                <p className="mb-4">
                                  {result.id === "ubuntu"
                                    ? "GNOME"
                                    : result.id === "arch"
                                      ? "None (you choose!)"
                                      : result.id === "fedora"
                                        ? "GNOME"
                                        : result.id === "mint"
                                          ? "Cinnamon"
                                          : result.id === "kali"
                                            ? "XFCE"
                                            : result.id === "tails"
                                              ? "GNOME"
                                              : "None (you choose!)"}
                                </p>

                                <h5 className="font-bold mb-2">Best For</h5>
                                <p>
                                  {result.id === "ubuntu"
                                    ? "Beginners, developers, and enterprise use"
                                    : result.id === "arch"
                                      ? "Experienced users, tinkerers, and minimalists"
                                      : result.id === "fedora"
                                        ? "Developers and early adopters"
                                        : result.id === "mint"
                                          ? "Windows migrants and users who prefer traditional interfaces"
                                          : result.id === "kali"
                                            ? "Security professionals and penetration testing"
                                            : result.id === "tails"
                                              ? "Privacy-focused users and journalists"
                                              : "Advanced users who want complete control"}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
