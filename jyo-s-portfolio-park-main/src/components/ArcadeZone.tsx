import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, RotateCcw } from 'lucide-react';
import WhackAMole from './WhackAMole';

const CardMatchGame = () => {
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState<number | null>(
    localStorage.getItem('cardMatchBest') ? parseInt(localStorage.getItem('cardMatchBest')!) : null
  );

  const emojis = ['🎡', '🎢', '🎠', '🎪', '🎭', '🎨', '🎯', '🎲'];

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  const handleClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [first, second] = newFlipped;
      
      if (cards[first] === cards[second]) {
        setMatched([...matched, first, second]);
        setFlipped([]);
        
        if (matched.length + 2 === cards.length) {
          const finalMoves = moves + 1;
          if (!bestScore || finalMoves < bestScore) {
            setBestScore(finalMoves);
            localStorage.setItem('cardMatchBest', finalMoves.toString());
          }
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <p>Moves: <span className="font-bold">{moves}</span></p>
          {bestScore && <p className="flex items-center gap-1 text-yellow-600"><Trophy className="w-4 h-4" /> Best: {bestScore}</p>}
        </div>
        <Button onClick={initGame} size="sm" variant="outline">
          <RotateCcw className="w-4 h-4 mr-1" /> Reset
        </Button>
      </div>
      
      <div className="grid grid-cols-4 gap-3">
        {cards.map((emoji, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => handleClick(index)}
              className={`aspect-square flex items-center justify-center text-3xl cursor-pointer transition-all ${
                flipped.includes(index) || matched.includes(index)
                  ? 'bg-primary/20'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {(flipped.includes(index) || matched.includes(index)) ? emoji : '?'}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SequenceMemoryGame = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [playerSequence, setPlayerSequence] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const [level, setLevel] = useState(0);
  const [bestScore, setBestScore] = useState<number>(
    localStorage.getItem('sequenceBest') ? parseInt(localStorage.getItem('sequenceBest')!) : 0
  );

  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

  const startGame = () => {
    setSequence([Math.floor(Math.random() * 4)]);
    setPlayerSequence([]);
    setLevel(1);
    setGameStarted(true);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (sequence.length > 0 && isPlaying) {
      playSequence();
    }
  }, [sequence]);

  const playSequence = async () => {
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setActiveButton(sequence[i]);
      await new Promise(resolve => setTimeout(resolve, 500));
      setActiveButton(null);
    }
    setIsPlaying(false);
  };

  const handleButtonClick = (index: number) => {
    if (isPlaying || !gameStarted) return;

    setActiveButton(index);
    setTimeout(() => setActiveButton(null), 300);

    const newPlayerSequence = [...playerSequence, index];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1] !== sequence[newPlayerSequence.length - 1]) {
      // Game over
      if (level > bestScore) {
        setBestScore(level);
        localStorage.setItem('sequenceBest', level.toString());
      }
      setGameStarted(false);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      // Level complete
      setLevel(level + 1);
      setPlayerSequence([]);
      setIsPlaying(true);
      setTimeout(() => {
        setSequence([...sequence, Math.floor(Math.random() * 4)]);
      }, 1000);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <p>Level: <span className="font-bold">{level}</span></p>
          <p className="flex items-center gap-1 text-yellow-600"><Trophy className="w-4 h-4" /> Best: {bestScore}</p>
        </div>
        <Button onClick={startGame} size="sm">
          {gameStarted ? 'Restart' : 'Start Game'}
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {colors.map((color, index) => (
          <motion.button
            key={index}
            onClick={() => handleButtonClick(index)}
            whileHover={{ scale: gameStarted && !isPlaying ? 1.05 : 1 }}
            whileTap={{ scale: gameStarted && !isPlaying ? 0.95 : 1 }}
            className={`${color} h-24 rounded-xl transition-all ${
              activeButton === index ? 'brightness-150 scale-105' : 'brightness-100'
            } ${!gameStarted || isPlaying ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={!gameStarted || isPlaying}
          />
        ))}
      </div>

      {!gameStarted && level > 0 && (
        <p className="text-center text-sm text-muted-foreground">
          Game Over! You reached level {level}
        </p>
      )}
    </div>
  );
};

const ArcadeZone = () => {
  return (
    <section id="arcade-zone" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            🎮 Arcade Zone
          </h2>
          <p className="text-xl text-muted-foreground">
            Test your memory and beat your high score!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
              <Card className="p-6 bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-3xl shadow-xl border-4 border-pink-200">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                🃏 Card Match
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Find all matching pairs in the fewest moves!
              </p>
              <CardMatchGame />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
              <Card className="p-6 bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-3xl shadow-xl border-4 border-pink-200">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                🎵 Sequence Memory
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Remember and repeat the color sequence!
              </p>
              <SequenceMemoryGame />
            </Card>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
                  <Card className="p-6 bg-white/90 dark:bg-card/80 backdrop-blur-sm rounded-3xl shadow-xl border-4 border-pink-200">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  🐻 Whack-a-Mole
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Hit the moles and beat your best score!
                </p>
                <WhackAMole />
              </Card>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArcadeZone;
