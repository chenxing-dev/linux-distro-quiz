import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import distros, { type Distro } from "@/data/distros";
import { FaHeart, FaRedo, FaShareAlt, FaChevronDown, FaChevronUp, FaSpinner, FaCheck } from "react-icons/fa";

// Mock function to calculate result - in real app this would use trait scoring
const calculateResult = () => {
  // For demo purposes
  return distros[6];
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
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500 mb-6"></div>
          <h2 className="text-2xl font-bold text-white">Analyzing your answers...</h2>
          <p className="text-gray-400 mt-2">Calculating your perfect Linux match</p>
          <div className="mt-8 font-mono text-sm text-green-400 bg-gray-800/50 p-4 rounded-lg max-w-md mx-auto">
            <p className="mb-2">$ ./distro_matcher --user-profile</p>
            <div className="inline-flex items-center">
              <FaSpinner className="mr-3 animate-spin" />
              <span className="text-blue-400">Processing personality traits</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-4 flex items-center justify-center">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-4xl">
          <div className="bg-gray-800/70 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            {/* Result header */}
            <div className="p-8 md:p-12 flex flex-col justify-center *:mx-auto bg-gradient-to-r from-blue-900/30 to-indigo-900/30">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">Your Linux Personality Match Is...</h1>

              {/* ASCII Art Logo */}
              <div className="font-mono text-xs md:text-sm leading-[1.1] text-cyan-300 whitespace-pre mb-4">{result.ascii || result.name}</div>

              <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }} className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {result.name}
              </motion.h2>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.5 }} className="text-xl text-blue-200 max-w-2xl">
                {result.description}
              </motion.p>
            </div>

            {/* Personality insights */}
            <div className="p-8 bg-gray-800/60 border-t border-gray-700/50">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Why {result.name} is Your Perfect Match</h3>

                <motion.div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/30 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }}>
                  <p className="text-gray-200 text-lg leading-relaxed">{result.personality}</p>

                  <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-cyan-300 italic">"{result.quote}"</p>
                  </div>
                </motion.div>

                {/* Traits */}
                <h4 className="text-xl font-bold text-white mb-4">Your Key Traits</h4>
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  {result.traits.map((trait: string, index: number) => (
                    <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }} className="px-4 py-2 bg-gray-700 rounded-full text-cyan-300 font-medium">
                      {trait
                        .split("-")
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(" ")}
                    </motion.div>
                  ))}
                </div>

                {/* Distro details toggle */}
                <div className="text-center mb-8">
                  <button onClick={() => setShowDetails(!showDetails)} className="text-blue-400 hover:text-blue-300 font-medium flex items-center justify-center mx-auto">
                    {showDetails ? "Hide Technical Details" : "Show Technical Details"}
                    {showDetails ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                  </button>
                </div>

                {/* Technical details */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-gray-900/50 rounded-xl border border-gray-700/30">
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-4">About {result.name}</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-bold text-cyan-300 mb-2">Package Manager</h5>
                            <p className="text-gray-300 mb-4">{result.id === "ubuntu" || result.id === "mint" ? "APT (Advanced Package Tool)" : result.id === "fedora" ? "DNF (Dandified YUM)" : "Pacman"}</p>

                            <h5 className="font-bold text-cyan-300 mb-2">Release Cycle</h5>
                            <p className="text-gray-300">{result.id === "ubuntu" ? "Every 6 months (interim), every 2 years (LTS)" : result.id === "arch" ? "Rolling release" : result.id === "fedora" ? "Approximately every 6 months" : "Every 6 months"}</p>
                          </div>

                          <div>
                            <h5 className="font-bold text-cyan-300 mb-2">Default Desktop</h5>
                            <p className="text-gray-300 mb-4">{result.id === "ubuntu" ? "GNOME" : result.id === "arch" ? "None (you choose!)" : result.id === "fedora" ? "GNOME" : "Cinnamon"}</p>

                            <h5 className="font-bold text-cyan-300 mb-2">Best For</h5>
                            <p className="text-gray-300">{result.id === "ubuntu" ? "Beginners, developers, and enterprise use" : result.id === "arch" ? "Experienced users, tinkerers, and minimalists" : result.id === "fedora" ? "Developers and early adopters" : "Windows migrants and users who prefer traditional interfaces"}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Action buttons */}
            <div className="p-8 bg-gray-900/70 border-t border-gray-700/50">
              {/* Shareable link */}
              <div className="bg-gray-900/70 p-4 rounded-lg border border-gray-700/50 mb-8">
                <h4 className="text-lg font-bold text-cyan-300 mb-3">Share Your Result</h4>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 bg-gray-800/50 p-3 rounded border border-gray-700/30 truncate text-sm text-gray-300">{shareUrl}</div>
                  <button onClick={handleCopyResult} className={`px-4 py-2 rounded flex items-center justify-center ${copied ? "bg-green-600 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>
                    {copied ? (
                      <>
                        <FaCheck className="mr-2" /> Copied!
                      </>
                    ) : (
                      <>
                        <FaShareAlt className="mr-2" /> Copy Link
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onRetake} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-medium rounded-lg shadow-lg hover:from-purple-500 hover:to-indigo-600 transition-all flex items-center justify-center">
                  <FaRedo className="mr-2" />
                  Retake Quiz
                </motion.button>
              </div>
            </div>

            {/* Footer */}
            <div className="py-4 text-center bg-gray-900/80 border-t border-gray-700/50">
              <p className="text-gray-400 inline-flex items-center">
                Made with
                <FaHeart className="text-red-500 mx-2" />
                for the Linux community
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResultScreen;
