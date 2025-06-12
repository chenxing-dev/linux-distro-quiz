import { useState } from "react";
import WelcomeScreen from "@/components/Quiz/WelcomeScreen";
import QuizFlow from "@/components/Quiz/QuizFlow";
import ResultScreen from "@/components/Quiz/ResultScreen";

function App() {
  const [quizState, setQuizState] = useState<"welcome" | "quiz" | "results">("welcome");
  const [quizAnswers, setQuizAnswers] = useState({});

  const startQuiz = () => {
    setQuizState("quiz");
  };

  const completeQuiz = (answers: Record<number, string>) => {
    setQuizAnswers(answers);
    setQuizState("results");
  };

  const retakeQuiz = () => {
    setQuizAnswers({});
    setQuizState("welcome");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {quizState === "welcome" && <WelcomeScreen onStart={startQuiz} />}
      {quizState === "quiz" && <QuizFlow onComplete={completeQuiz} />}
      {quizState === "results" && <ResultScreen answers={quizAnswers} onRetake={retakeQuiz} />}
    </div>
  );
}

export default App;
