import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import { FaInfoCircle, FaLinux, FaSpinner, FaTerminal } from "react-icons/fa";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartQuiz = () => {
    setIsLoading(true);

    // Show toast notification
    toast("Quiz Starting!", {
      description: "Getting your questions ready..."
    });

    setTimeout(() => {
      onStart();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-5"
    >
      {/* Toast Provider */}
      <Toaster />

      {/* Decorative terminal windows */}
      <Card className="top-[10%] left-[5%] p-0 hidden md:block absolute w-64 h-48 bg-black/80 border border-zinc-500/30 shadow-xl overflow-hidden">
        <div className="flex items-center p-2 bg-zinc-800 border-b border-zinc-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-3 font-mono text-zinc-50 text-sm">
          <p className="overflow-hidden border-r-2 border-zinc-500">$ ./quiz --start</p>
          <p className="mt-2 animate-pulse">Loading personality matrix...</p>
        </div>
      </Card>

      <Card className="bottom-[5%] right-[8%] p-0 hidden md:block absolute w-64 h-48 bg-black/80 border border-zinc-500/30 shadow-xl overflow-hidden">
        <div className="flex items-center p-2 bg-zinc-800 border-b border-zinc-700">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-3 font-mono text-zinc-50 text-sm">
          <p className="overflow-hidden border-r-2 border-zinc-500">$ cat welcome.txt</p>
          <p className="mt-2">Welcome to Linux Distro Quiz!</p>
        </div>
      </Card>

      {/* Main content */}
      <Card className="w-full max-w-4xl">
        {/* Hero section */}
        <CardHeader className="p-8 md:p-12 text-center">
          <div>
            <CardTitle className="text-3xl md:text-5xl font-bold mb-6 inline-flex">
              <FaLinux className="mr-3" />
              Linux Distro Quiz
            </CardTitle>

            <CardDescription className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Discover which Linux distribution matches your personality!
              Answer a few fun questions and find out.
            </CardDescription>

            {/* Start button */}
            <Button onClick={handleStartQuiz} disabled={isLoading} className="px-8 py-6 text-lg md:text-xl font-bold">
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
            </Button>
          </div>
        </CardHeader>

        {/* Info Dialog */}
        <CardContent className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <FaInfoCircle className="mr-2" /> How It Works
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">How the Quiz Works</DialogTitle>
                <DialogDescription>
                  Learn about our methodology and how we match you with the perfect distro
                </DialogDescription>
              </DialogHeader>
              <div>
                <div className="p-2">
                  <h3 className="font-bold mb-2">1. Personality Assessment</h3>
                  <p>
                    We analyze your preferences and technical approach through carefully crafted questions.
                  </p>
                </div>
                <div className="p-2">
                  <h3 className="font-bold mb-2">2. Trait Matching</h3>
                  <p>
                    Your answers are matched against key traits of popular Linux distributions.
                  </p>
                </div>
                <div className="p-2">
                  <h3 className="font-bold mb-2">3. Algorithmic Recommendation</h3>
                  <p>
                    Our algorithm calculates the best distro match based on your personality profile.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeScreen;
