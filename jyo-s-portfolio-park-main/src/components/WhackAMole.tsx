import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhackAMole() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeMole, setActiveMole] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('whackAMoleHighScore');
    if (stored) setHighScore(parseInt(stored));
  }, []);

  useEffect(() => {
    let interval: number | undefined;
    if (isPlaying && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
      setActiveMole(null);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem('whackAMoleHighScore', score.toString());
      }
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, score, highScore]);

  useEffect(() => {
    let moleTimer: number | undefined;
    if (isPlaying && timeLeft > 0) {
      const showMole = () => {
        const randomTime = Math.random() * 1000 + 500;
        const randomHole = Math.floor(Math.random() * 9);
        setActiveMole(randomHole);
        moleTimer = window.setTimeout(() => {
          showMole();
        }, randomTime);
      };
      showMole();
    }
    return () => clearTimeout(moleTimer);
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
  };

  const whackMole = (index: number) => {
    if (index === activeMole) {
      setScore((prev) => prev + 1);
      setActiveMole(null);
    }
  };

  return (
    <div className="bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="flex justify-between items-center px-4 mt-4 text-gray-600 font-semibold">
          <span>Score: {score}</span>
          <span>Time: {timeLeft}s</span>
        </div>
        <div className="text-sm text-pink-600 font-bold mt-1">Best: {highScore}</div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[...Array(9)].map((_, idx) => (
          <div
            key={idx}
            className="aspect-square bg-gradient-to-br from-amber-800 to-amber-600 rounded-full relative overflow-hidden cursor-pointer shadow-inner ring-2 ring-amber-900/20"
            onClick={() => isPlaying && whackMole(idx)}
          >
            <AnimatePresence>
              {activeMole === idx && (
                <motion.div
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  exit={{ y: 50 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center text-4xl select-none"
                >
                  🐻
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {!isPlaying && (
        <div className="text-center">
          {timeLeft === 0 && <p className="text-xl font-bold text-gray-800 mb-4">Game Over! Score: {score}</p>}
          <Button
            onClick={startGame}
            className="w-full hover:bg-pink-600 text-white rounded-xl py-6 text-lg font-bold shadow-lg"
          >
            {timeLeft === 0 ? 'Play Again' : 'Start Game'}
          </Button>
        </div>
      )}
    </div>
  );
}
