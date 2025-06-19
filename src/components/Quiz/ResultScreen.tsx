import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Distro } from "@/data/distros-en";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaHeart, FaRedo, FaWeibo } from "react-icons/fa";
import { IoLogoWechat } from "react-icons/io5";
import { Check, ChevronRight, Copy, LinkIcon, X } from "lucide-react";

import DistroTechnicalDetails from "./DistroTechnicalDetails";
import { ShareCard } from "./ShareCard";
import { QRCodeSVG } from "qrcode.react";
import { useLocale } from "@/context/useLocale";
import translations from "@/locales/translations.json";
import LanguageSwitcher from "./LanguageSwitcher";

interface ResultScreenProps {
  result: Distro;
  onRetake: () => void;
}

const getBasePath = () => {
  const basePath = import.meta.env.BASE_URL || "/";
  return `${window.location.origin}${basePath}`;
};

const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRetake }) => {
  const { locale } = useLocale();
  const t = translations[locale];
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const shareCardRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    // Generate clean URL for sharing
    const getShareableLink = () => {
      const hashUrl = `${getBasePath()}#/result/${result.id}`;
      return hashUrl;
    };

    const shareableLink = getShareableLink();
    setShareUrl(shareableLink);
  }, [result]);

  const handleCopyResult = () => {
    if (result) {
      const resultText = shareUrl;
      navigator.clipboard.writeText(resultText);
      setCopied(true);
      setShowCopiedAlert(true);
      setTimeout(() => {
        setCopied(false);
        setShowCopiedAlert(false);
      }, 2000);
    }
  };

  const shareOnWeibo = async () => {
    const imageUrl = `${getBasePath()}share-cards/${result.id}.png`;

    // Prepare sharing data
    const text = `💻 操作系统性格测试！测出你的本命系统~ 我是${result.name}型！包准，不准不收钱！#linux# #macos# #性格测试# 👇点击测试\n`;

    // Construct the URL with proper encoding
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(shareUrl);

    // Use template literals
    const weiboUrl = `http://service.weibo.com/share/share.php?language=zh_cn&pic=${imageUrl}&url=${encodedUrl}&title=${encodedText}`;

    window.open(weiboUrl, "weibo_share");
  };

  const renderFooter = () => {
    const parts = t.madeWithHeart.split("<heartIcon/>");
    return (
      <span className="flex items-center">
        {parts[0]}
        <FaHeart className="mx-2 text-red-500" />
        {parts[1]}
      </span>
    );
  };

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      {/* Hidden share card for image generation */}
      <div className="hidden">
        <div ref={shareCardRef}>
          <ShareCard distro={result} shareUrl={shareUrl} />
        </div>
      </div>

      {/* Copied Alert */}
      {showCopiedAlert && (
        <Alert className="fixed top-8 inset-x-4 md:inset-x-auto md:right-8 md:w-auto md:max-w-md border-zinc-900 z-50">
          <AlertTitle>{t.copiedClipboard}</AlertTitle>
          <AlertDescription>{t.sharePrompt}</AlertDescription>
        </Alert>
      )}

      <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-4xl">
          <Card className="relative pb-2 md:pb-6">
            {/* ADD LANGUAGE SWITCHER */}
            <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
              <LanguageSwitcher />
            </div>
            {/* Result header */}
            <CardHeader className="flex flex-col justify-center *:mx-auto pt-4 md:pt-10">
              <CardTitle className="text-2xl md:text-4xl font-bold text-center">{(result.id === "macos" && t.personalityMatch) || t.linuxMatch}</CardTitle>

              {/* ASCII Art Logo */}
              <div className="font-mono font-bold text-[10px] md:text-sm leading-[10px] md:leading-4 whitespace-pre md:mb-4">{result.ascii}</div>

              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-3xl md:text-5xl font-bold mb-2">
                {result.name}
              </motion.h2>

              <CardDescription className="text-xl max-w-3xl text-center">{result.description}</CardDescription>
            </CardHeader>

            <CardContent>
              {/* Personality insights */}
              <div className="md:px-8">
                <div>
                  {/* Traits */}
                  <CardTitle className="text-xl font-bold mb-4 text-center">{t.yourKeyTraits}</CardTitle>
                  <div className="flex flex-wrap gap-3 justify-center mb-8">
                    {result.traits.map((trait: string, index: number) => (
                      <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}>
                        <Badge className="px-2 text-sm">
                          {trait
                            .split("-")
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  {/* 恋爱人设展示 */}
                  {result.lovePersona && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="mb-8">
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-10 h-px bg-zinc-300 flex-1"></div>
                        <div className="mx-3 flex items-center">
                          <FaHeart className="text-pink-500 mr-2" />
                          <h3 className="text-lg font-bold text-pink-700">系统人设恋爱版</h3>
                        </div>
                        <div className="w-10 h-px bg-zinc-300 flex-1"></div>
                      </div>

                      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200 shadow-sm">
                        <div className="text-center mb-3">
                          <p className="text-sm text-pink-600 mb-1">你的操作系统人格在恋爱中的表现</p>
                          <h4 className="text-xl font-bold text-pink-700">{result.lovePersona.title}</h4>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2">
                          {result.lovePersona.traits.map((trait, i) => (
                            <Badge key={i} variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                              {trait}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {result.note && <result.note />}

                  {/* Technical details accordion */}
                  <Accordion type="single" collapsible className="border rounded-lg">
                    <AccordionItem value="technical">
                      <AccordionTrigger className="text-lg font-bold px-4 md:px-6 flex items-center">{t.technicalDetails}</AccordionTrigger>
                      <AccordionContent>
                        <DistroTechnicalDetails distro={result} />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </CardContent>

            {/* Action buttons */}
            <CardFooter className="flex-col md:px-14">
              {/* Shareable link */}
              <Card className="py-4 mb-8 w-full bg-zinc-50">
                <CardContent className="px-4 md:px-6">
                  <CardTitle className="text-lg font-bold text-center md:text-left flex justify-between mb-2">
                    <div className="flex items-center gap-2 text-nowrap">
                      <LinkIcon size={16} />
                      <span className="text-base md:text-lg">{t.shareYourResult}</span>
                    </div>
                    <Button size="sm" onClick={handleCopyResult} className="flex items-center gap-1">
                      {copied ? (
                        <>
                          <Check size={14} /> {t.copied}
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> {t.copy}
                        </>
                      )}
                    </Button>
                  </CardTitle>
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex-1 bg-white text-zinc-700">
                      <Input id="share-url" value={shareUrl} readOnly className="truncate font-mono font-bold text-xs" />
                    </div>
                    <div className="flex gap-2 text-sm font-bold">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="flex-1 bg-[#07C160] hover:bg-[#06ae56] text-white">
                            <IoLogoWechat />
                            微信
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xs md:max-w-md p-0 overflow-hidden border-0" showCloseButton={false}>
                          <DialogClose asChild>
                            <Button variant="ghost" className="absolute top-4 right-4 hover:bg-white/20 text-zinc-800 w-4 h-6">
                              <X size={20} />
                            </Button>
                          </DialogClose>
                          <div>
                            <div className="bg-gradient-to-r from-[#07C160] to-[#06ae56] p-6">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2 text-white text-2xl">
                                  <IoLogoWechat size={28} />
                                  微信分享
                                </DialogTitle>
                                <DialogDescription className="text-white/90">扫描二维码分享测试结果</DialogDescription>
                              </DialogHeader>
                            </div>

                            <div className="p-6">
                              <div className="flex justify-center">
                                <div className="p-5 rounded-xl border-4 border-[#07C160] shadow-lg">
                                  <QRCodeSVG value={shareUrl} size={200} bgColor={"#FFFFFF"} fgColor={"#000000"} level={"L"} />
                                </div>
                              </div>

                              <div className="mt-6 text-center">
                                <div className="flex items-center justify-center gap-2 text-zinc-600 mb-2">
                                  <span>1. 打开微信</span>
                                  <ChevronRight size={16} />
                                  <span>2. 发现</span>
                                  <ChevronRight size={16} />
                                  <span>3. 扫一扫</span>
                                </div>

                                <p className="text-sm text-zinc-500">扫描二维码，分享给你的好友</p>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      <Button onClick={shareOnWeibo} className="flex-1 bg-[#E6162D] hover:bg-[#c91427] text-white">
                        <FaWeibo />
                        微博
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Button onClick={onRetake}>
                <FaRedo className="mr-2" />
                {t.retakeQuiz}
              </Button>

              <Separator className="my-4" />

              {/* Footer */}
              <div className="pb-4 text-center">
                <p className="inline-flex items-center text-nowrap">{renderFooter()}</p>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResultScreen;
