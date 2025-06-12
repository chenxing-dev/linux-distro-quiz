import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import questions from "@/data/questions.json";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuizFlow: React.FC<{ onComplete: (answers: Record<number, string>) => void }> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Calculate progress
  useEffect(() => {
    const answeredQuestions = Object.keys(answers).length;
    const totalQuestions = questions.length;
    setProgress((answeredQuestions / totalQuestions) * 100);
  }, [answers]);

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
    <div className="min-h-screen max-w-3xl mx-auto flex flex-col justify-center">
      {/* Terminal Progress Bar */}
      <div className="my-8 bg-gray-900/80 border border-gray-700/50 rounded-lg text-sm font-mono text-green-400">
        <div className="flex items-center p-2 bg-gray-800/80 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-4">
          <div className="flex">
            <span className="text-blue-400">user@linux-quiz:~$</span>
            <span className="ml-2 font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="animate-pulse">▋</span>
          </div>
          <div className="mt-1 inline-flex w-full items-center gap-2">
            <span className="text-cyan-400">Progress:</span>
            <div className="overflow-hidden w-full bg-gray-700 rounded-full h-1.5">
              <motion.div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full" initial={{ width: "0%" }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }}></motion.div>
            </div>
            <span className="text-nowrap"> {Math.round(progress)}% complete</span>
          </div>
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }} className="bg-gray-800/70 rounded-xl p-6 border border-gray-700/50 shadow-xl">
          <div className="flex items-center mb-6">
            <div className="bg-blue-900/60 w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <span className="text-xl font-bold text-blue-300">{currentQuestion + 1}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100">{questions[currentQuestion].text}</h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion].options.map(option => (
              <motion.button key={option.id} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${selectedOption === option.id ? "border-blue-500 bg-blue-500/20 shadow-lg shadow-blue-500/20" : "border-gray-600 hover:border-blue-400"}`} onClick={() => handleOptionSelect(option.id)}>
                <div className="flex items-start">
                  <div className={`mr-3 mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedOption === option.id ? "border-blue-500 bg-blue-500" : "border-gray-500"}`}>{selectedOption === option.id && <div className="w-2 h-2 bg-white rounded-full"></div>}</div>
                  <span className="text-gray-200">{option.text}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button onClick={handlePrevious} disabled={currentQuestion === 0} className={`px-6 py-3 rounded-lg font-medium flex items-center ${currentQuestion === 0 ? "bg-gray-700/50 text-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-600 text-gray-200"}`}>
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Previous
            </button>

            <button onClick={handleNext} disabled={!selectedOption} className={`px-6 py-3 rounded-lg font-medium flex items-center ${!selectedOption ? "bg-blue-500/50 text-blue-200 cursor-not-allowed" : "bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30"}`}>
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default QuizFlow;
