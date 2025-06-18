import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaLinux, FaSpinner, FaTerminal } from "react-icons/fa";
import { useLocale } from "@/context/useLocale";
import translations from "@/locales/translations.json";

const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const { locale, setLocale } = useLocale();
  const t = translations[locale];
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = () => {
    setIsLoading(true);

    // Show toast notification
    toast(t.quizStarting, {
      description: t.gettingQuestionsReady
    });

    setTimeout(() => {
      onStart();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      {/* Toast Provider */}
      <Toaster />

      {/* Decorative terminal windows */}
      <Card className="top-[8%] left-[5%] p-0 hidden md:block absolute w-64 h-48 bg-black/90 border border-zinc-500/30 shadow-xl overflow-hidden z-10">
        <div className="flex items-center p-2 bg-zinc-800 border-b border-zinc-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-3 font-mono text-zinc-50 text-sm">
          <p className="overflow-hidden border-r-2 border-zinc-500">$ {t.command}</p>
          <p className="mt-2 animate-pulse">{t.loadingMatrix}</p>
        </div>
      </Card>

      <Card className="bottom-[8%] right-[5%] p-0 hidden md:block absolute w-64 h-48 bg-black/90 border border-zinc-500/30 shadow-xl overflow-hidden z-10">
        <div className="flex items-center p-2 bg-zinc-800 border-b border-zinc-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-3 font-mono text-zinc-50 text-sm">
          <p className="overflow-hidden border-r-2 border-zinc-500">$ {t.catCommand}</p>
          <p className="mt-2">{t.welcome}</p>
        </div>
      </Card>

      {/* Main content */}
      <Card className="w-full max-w-4xl pt-4 pb-0">
        {/* Hero section */}
        <CardHeader className="p-8 md:p-12 text-center">
          {/* ADD LANGUAGE SWITCHER */}
          <div className="absolute top-0 right-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button onClick={() => setLocale(locale === "en" ? "zh" : "en")} className="inline-flex items-center justify-center rounded-lg w-8 h-8 text-sm font-semibold bg-zinc-800 border border-zinc-700 text-zinc-200 hover:bg-zinc-700 transition-all focus:outline-none">
                    {locale === "en" ? "EN" : "中"}
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-zinc-800 border border-zinc-700 text-zinc-200">{locale === "en" ? "Select language: current language is English" : "选择语言：当前语言是中文"}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <CardTitle className="text-3xl md:text-5xl font-bold mb-6 inline-flex">
              <FaLinux className="mr-3" />
              {t.title}
            </CardTitle>

            <CardDescription className="text-lg md:text-xl max-w-2xl mx-auto mb-10">{t.description}</CardDescription>

            {/* Start button */}
            <Button onClick={handleStartQuiz} disabled={isLoading} className="px-8 py-6 text-lg md:text-xl font-bold">
              {isLoading ? (
                <>
                  <FaSpinner className="mr-3 animate-spin" />
                  {t.loadingQuiz}
                </>
              ) : (
                <>
                  <FaTerminal className="mr-2" />
                  {t.startQuiz}
                </>
              )}
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
