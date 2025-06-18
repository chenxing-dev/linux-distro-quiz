import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import questionsEN from "@/data/questions";
import questionsZH from "@/data/questions-zh";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useLocale } from "@/context/useLocale";
import translations from "@/locales/translations.json";

const QuizFlow: React.FC<{ onComplete: (answers: Record<number, string>) => void }> = ({ onComplete }) => {
  const { locale } = useLocale();
  const t = translations[locale];
  const questions = locale === "zh" ? questionsZH : questionsEN;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Calculate progress
  useEffect(() => {
    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = questions.length;
    setProgress((answeredQuestions / totalQuestions) * 100);
  }, [answers, questions.length]);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswers(prev => ({ ...prev, [questions[currentQuestion].id]: optionId }));
  };

  const handleNext = () => {
    if (selectedOption) {
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        // Quiz completed
        onComplete(answers);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      // Set selected option to previous answer if exists
      const prevAnswer = answers[questions[currentQuestion - 1].id];
      setSelectedOption(prevAnswer || null);
    }
  };

  return (
    <div className="min-h-screen max-w-3xl p-5 mx-auto flex flex-col justify-center">
      {/* Terminal Progress Bar */}
      <div className="my-8 bg-zinc-900/80 border border-zinc-600/50 rounded-lg text-sm font-mono text-zinc-50 hidden md:block">
        <div className="flex items-center p-2 bg-zinc-800/80 border-b border-zinc-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-4">
          <div className="flex items-center">
            <span className="">user@linux-quiz:~$</span>
            <Label className="text-sm font-medium ml-2">{t.questionNumber.replace("{current}", (currentQuestion + 1).toString()).replace("{total}", questions.length.toString())}</Label>
            <span className="animate-pulse text-base pl-0 pb-[2px]">▋</span>
          </div>
          <div className="mt-1 inline-flex w-full items-center gap-2 text-nowrap">
            <span>{t.progress}</span>
            <Progress value={progress} className="bg-zinc-600 border border-zinc-500 mt-1" />
            <Label className="text-nowrap text-sm font-medium">
              {Math.round(progress)}% {t.complete}
            </Label>
          </div>
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}>
          <Card className="p-6 border border-zinc-500">
            <CardHeader className="flex items-center p-0 md:mb-6">
              <div className="bg-zinc-900/60 w-8 h-8 md:w-10 md:h-10 rounded-full flex flex-shrink-0 items-center justify-center mr-2 md:mr-4">
                <span className="text-lg md:text-xl font-bold text-zinc-300">{currentQuestion + 1}</span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold">{questions[currentQuestion].text}</CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              {/* Options */}
              <RadioGroup value={selectedOption || ""} onValueChange={handleOptionSelect} className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                {questions[currentQuestion].options.map(option => (
                  <motion.div key={option.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <RadioGroupItem value={option.id} id={`option-${option.id}`} className="sr-only" />
                    <Label htmlFor={`option-${option.id}`} className={`h-full px-4 py-2 md:py-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${selectedOption === option.id ? "border-zinc-500 bg-zinc-950/20 shadow-lg shadow-zinc-500/20" : "border-zinc-800 hover:border-zinc-400"}`}>
                      <div className="flex items-center">
                        <div className={`mr-3 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${selectedOption === option.id ? "border-zinc-500 bg-zinc-800" : "border-zinc-500"}`}>{selectedOption === option.id && <div className="w-2 h-2 bg-white rounded-full"></div>}</div>
                        <span className="leading-tight">{option.text}</span>
                      </div>
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </CardContent>

            {/* Navigation buttons */}
            <CardFooter className="flex justify-between mt-4 p-0">
              <Button onClick={handlePrevious} disabled={currentQuestion === 0} variant="outline" className={currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""}>
                <FaArrowLeft className="mr-2" />
                Previous
              </Button>

              <Button onClick={handleNext} disabled={!selectedOption} className={!selectedOption ? "opacity-50 cursor-not-allowed" : ""}>
                {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                <FaArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizFlow;
