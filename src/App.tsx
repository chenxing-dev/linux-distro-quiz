import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { isGitHubPages } from '@/lib/urlUtils';
import WelcomeScreen from "@/components/Quiz/WelcomeScreen";
import QuizFlow from "@/components/Quiz/QuizFlow";
import ResultScreen from "@/components/Quiz/ResultScreen";
import distros, { type Distro } from "@/data/distros";
import questions from "@/data/questions";
import NotFound from "@/pages/NotFound";
import UrlCleaner from "@/components/UrlCleaner";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [quizState, setQuizState] = useState<"welcome" | "quiz" | "results">("welcome");
  const [result, setResult] = useState<Distro | null>(null);

  // Get base path from environment
  const basePath = import.meta.env.BASE_URL || '';

  useEffect(() => {
    // Handle direct result links
    const handleDirectResultLink = () => {
      // For GitHub Pages, location.pathname is always base path
      // For direct links, we need to parse the hash
      let path = location.pathname;

      if (isGitHubPages() && location.hash) {
        path = location.hash.substring(1);
      }

      // Remove base path from the location pathname
      const pathWithoutBase = path.replace(new RegExp(`^${basePath}`), '');

      // Split the path into segments
      const segments = pathWithoutBase.split('/').filter(Boolean);

      // Check if we have a result path
      if (segments[0] === 'result' && segments[1]) {
        const distroId = segments[1];
        const resultDistro = distros.find(d => d.id === distroId);

        if (resultDistro) {
          setResult(resultDistro);
          setQuizState("results");
        } else {
          // Redirect to home if result not found
          navigate('/NotFound');
        }
      }
    };

    handleDirectResultLink();
  }, [location, navigate, basePath]);

  // Update browser URL when step changes
  useEffect(() => {
    if (isGitHubPages()) {
      let newPath = basePath;

      if (quizState === 'results' && result) {
        newPath = `${basePath}#/result/${result.id}`;
      }

      // Only update if it's different
      if (window.location.hash !== `#${newPath.replace(basePath, '')}`) {
        window.location.hash = newPath.replace(basePath, '');
      }
    }
  }, [quizState, result, basePath]);

  // Calculate result based on accumulated traits
  const calculateResult = (answers: Record<number, string>) => {
    const traitScores: Record<string, number> = {};
    distros.forEach(distro => {
      traitScores[distro.id] = 0;
    });

    Object.values(answers).forEach((answer, index) => {
      const traits = questions[index].options.find(option => option.id === answer)?.traits || {};
      Object.entries(traits).forEach(([distro, points]) => {
        traitScores[distro] += points;
      });
    });

    // Return distro with highest score
    const distroId = Object.entries(traitScores).sort((a, b) => b[1] - a[1])[0][0];
    console.log(traitScores);
    const result = distros.find(distro => distro.id == distroId);
    return result || distros[0];
  };

  const startQuiz = () => {
    setQuizState("quiz");
  };

  const completeQuiz = (answers: Record<number, string>) => {
    const resultDistro = calculateResult(answers);
    setQuizState("results");
    setResult(resultDistro)
  };

  const retakeQuiz = () => {
    setQuizState("welcome");
    navigate(basePath || '/');
  };

  return (
    <>
      <UrlCleaner />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800">
            {quizState === "welcome" && <WelcomeScreen onStart={startQuiz} />}
            {quizState === "quiz" && <QuizFlow onComplete={completeQuiz} />}
            {quizState === "results" && result && <ResultScreen result={result} onRetake={retakeQuiz} />}
          </div>} />
        <Route path="/result/:distroId" element={
          result &&
          <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800">
            <ResultScreen result={result} onRetake={retakeQuiz} />
          </div>
        } />
      </Routes>
    </>

  );
}

export default App;
