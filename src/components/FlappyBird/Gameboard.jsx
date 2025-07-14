import { useState, useEffect, useRef } from 'react';
import Bird from './Bird';
import Pipe from './Pipe';

const GameBoard = () => {
  const [birdY, setBirdY] = useState(200);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const gameRef = useRef(null);

  const gravity = 0.7;
  const jumpStrength = -10;
  const pipeWidth = 50;
  const gap = 140;
  const gameHeight = 500;
  const gameWidth = 350;

  useEffect(() => {
    const spaceHandler = (e) => {
      if (e.code === 'Space') {
        setVelocity(jumpStrength);
      }
    };
    window.addEventListener('keydown', spaceHandler);

    return () => window.removeEventListener('keydown', spaceHandler);
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setVelocity((v) => v + gravity);
      setBirdY((y) => {
        const newY = y + velocity;
        if (newY < 0 || newY > gameHeight - 30) {
          setGameOver(true);
        }
        return newY;
      });

      setPipes((prev) => {
        let updated = prev.map((pipe) => ({
          ...pipe,
          x: pipe.x - 4,
        })).filter(pipe => pipe.x + pipeWidth > 0);

        if (updated.length === 0 || updated[updated.length - 1].x < gameWidth - 200) {
          const topHeight = Math.random() * 200 + 50;
          updated.push({
            x: gameWidth,
            topHeight,
            bottomHeight: gameHeight - topHeight - gap
          });
        }

        updated.forEach(pipe => {
          if (
            pipe.x < 50 && pipe.x + 4 >= 50 &&
            (birdY < pipe.topHeight || birdY > pipe.topHeight + gap)
          ) {
            setGameOver(true);
          }
          if (pipe.x + 4 === 50) setScore((s) => s + 1);
        });

        return updated;
      });

    }, 30);

    return () => clearInterval(interval);
  }, [velocity, birdY, gameOver]);

  const resetGame = () => {
    setBirdY(200);
    setVelocity(0);
    setPipes([]);
    setScore(0);
    setGameOver(false);
  };

  return (
    <div
      ref={gameRef}
      className="relative overflow-hidden bg-vintageSky border-8 border-inkBlack rounded-xl shadow-toon"
      style={{ width: gameWidth, height: gameHeight }}
    >
      <Bird y={birdY} />
      {pipes.map((pipe, index) => (
        <Pipe key={index} x={pipe.x} topHeight={pipe.topHeight} bottomHeight={pipe.bottomHeight} />
      ))}

      <div className="absolute top-3 left-4 text-xl font-extrabold text-inkBlack bg-white bg-opacity-70 px-3 py-1 rounded-full border-4 border-inkBlack">
        Score: {score}
      </div>

      {gameOver && (
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white font-body">
          <h2 className="text-4xl font-heading text-yellow-400 drop-shadow-lg mb-4">Game Over</h2>
          <p className="text-2xl mb-4">Your Score: {score}</p>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-arcadeGreen text-inkBlack font-extrabold text-lg rounded-lg border-4 border-inkBlack hover:bg-green-300 transition-all"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
