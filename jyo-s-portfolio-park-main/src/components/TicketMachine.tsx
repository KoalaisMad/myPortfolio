import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TicketMachine() {
  const [currentTicket, setCurrentTicket] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const messages = [
    "You're doing better than you think ✨",
    "Rest is productive too. Please breathe 🫶",
    "One small step today is still progress.",
    "Your curiosity is your superpower.",
    "You are not behind. You're on your own path.",
    "Debugging is just detective work with extra steps.",
    "Future you is already proud of this effort.",
    "You deserve a boba break.",
    "You discovered Boba Bay!",
    "New ride unlocked: GirlBoss Safety Coaster.",
    "Take a moment to appreciate how far you've come.",
    "Small progress is still progress.",
    "You belong here. Your work matters.",
    "It's okay to take things one step at a time.",
    "You're allowed to be proud of yourself.",
    "Learning is messy, and that's okay.",
  ];

  const drawTicket = () => {
    setIsDrawing(true);
    setTimeout(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setCurrentTicket(randomMessage);
      setIsDrawing(false);
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto h-full flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex-grow flex flex-col"
      >
        {/* Machine body */}
        <div className="bg-gradient-to-b from-pink-300 via-purple-300 to-pink-400 dark:from-pink-900/40 dark:via-purple-900/40 dark:to-pink-900/50 rounded-3xl p-8 border-4 border-pink-200 dark:border-pink-800/50 shadow-2xl flex-grow flex flex-col">
          {/* Machine top */}
          <div className="bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 dark:from-orange-900/40 dark:via-pink-900/40 dark:to-purple-900/40 rounded-2xl p-4 mb-6 text-center border-4 border-white/50 dark:border-white/10">
            <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-orange-500" />
              Pick a Ticket!
              <Sparkles className="w-6 h-6 text-orange-500" />
            </h3>
            <p className="text-sm mt-2">Draw your fortune</p>
          </div>

          {/* Ticket display area */}
          <div className="min-h-40 bg-white/60 dark:bg-card/40 rounded-2xl p-6 mb-6 border-4 border-pink-200 dark:border-pink-800/30 flex items-center justify-center flex-grow">
            <AnimatePresence mode="wait">
              {isDrawing ? (
                <motion.div
                  key="drawing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-muted-foreground text-lg font-semibold"
                >
                  Drawing...
                </motion.div>
              ) : currentTicket ? (
                <motion.div
                  key={currentTicket}
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ type: 'spring', bounce: 0.4 }}
                  className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-900/20 dark:via-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 border-4 border-dashed border-pink-400 dark:border-pink-700/50 shadow-lg"
                >
                  <p className="text-foreground text-center font-semibold leading-relaxed">
                    {currentTicket}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-muted-foreground text-center"
                >
                  Click below to draw a ticket!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Draw button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={drawTicket}
              disabled={isDrawing}
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white text-lg py-6 rounded-2xl shadow-lg font-bold"
            >
              {isDrawing ? 'Drawing...' : '🎟️ Draw Ticket'}
            </Button>
          </motion.div>
        </div>

        {/* Machine stand */}
        <div className="h-8 bg-gradient-to-b from-pink-400 to-purple-500 dark:from-pink-900/50 dark:to-purple-900/60 mx-12 rounded-b-xl border-4 border-t-0 border-pink-200 dark:border-pink-800/50" />
      </motion.div>
    </div>
  );
}
