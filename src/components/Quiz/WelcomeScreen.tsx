import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaLinux, FaSpinner, FaTerminal } from "react-icons/fa";

const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = () => {
    setIsLoading(true);
    onStart();
    setIsLoading(false);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-5 
      bg-gradient-to-br from-gray-900 via-blue-950 to-sky-900"
    >
      {/* Decorative terminal windows */}
      <Card className="top-[10%] left-[5%] p-0 hidden md:block absolute w-64 h-48 bg-black/50 border border-blue-500/30 shadow-xl overflow-hidden">
        <div className="flex items-center p-2 bg-gray-800/80 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-3 font-mono text-green-400 text-sm">
          <p className="overflow-hidden border-r-2 border-green-500">$ ./quiz --start</p>
          <p className="mt-2 animate-pulse">Loading personality matrix...</p>
        </div>
      </Card>

      <Card className="bottom-[10%] right-[5%] p-0 hidden md:block absolute w-64 h-48 bg-black/50 border border-blue-500/30 shadow-xl overflow-hidden">
        <div className="flex items-center p-2 bg-gray-800/80 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-3 font-mono text-purple-400 text-sm">
          <p className="overflow-hidden border-r-2 border-purple-500">$ cat welcome.txt</p>
          <p className="mt-2">Welcome to Linux Distro Quiz!</p>
        </div>
      </Card>

      {/* Main content */}
      <div className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl z-10">
        {/* Hero section */}
        <div className="p-8 md:p-12 text-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 inline-flex bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              <FaLinux className="mr-3 text-cyan-400 inline" />
              Linux Distro Quiz
            </h1>

            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto">Discover which Linux distribution matches your personality!</p>
            <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-10">Answer a few fun questions and find out.</p>

            {/* Start button */}
            <Button onClick={handleStartQuiz} disabled={isLoading} className="overflow-hidden p-6 relative bg-gradient-to-r from-cyan-600 to-blue-700 font-bold md:text-xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1">
              {isLoading ? (
                <>
                  <FaSpinner className="mr-3 animate-spin" />
                  Loading Quiz...
                </>
              ) : (
                <>
                  <FaTerminal className="mr-2" />
                  Start the Quiz
                </>
              )}
              <div className="absolute inset-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
