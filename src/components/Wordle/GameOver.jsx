import { useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const GameOver = () => {
  const { gameOver, currAttempt, correctWord } = useContext(GameContext);

  const playAgain = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-6 p-6 bg-warmYellow rounded-2xl border-4 border-inkBlack shadow-toon font-heading text-2xl text-inkBlack">
      <h3
        className={`text-4xl drop-shadow-[3px_3px_0_#3B3A30] ${
          gameOver.guessedWord ? "text-softGreen" : "text-vintageRed"
        }`}
      >
        {gameOver.guessedWord ? "🎉 CORRECT!" : "❌ INCORRECT"}
      </h3>

      {!gameOver.guessedWord && (
        <h1 className="uppercase text-3xl text-inkBlack drop-shadow-[2px_2px_0_#3B3A30] tracking-wider">
          Correct Word: <span className="text-vintageRed">{correctWord}</span>
        </h1>
      )}

      {gameOver.guessedWord && (
        <h3 className="text-xl text-softGreen drop-shadow-[2px_2px_0_#3B3A30]">
          You guessed it in{" "}
          <span className="text-vintageRed font-extrabold">
            {currAttempt.attempt}
          </span>{" "}
          attempts.
        </h3>
      )}

      <button
        onClick={playAgain}
        className="mt-4 px-6 py-3 bg-softGreen text-inkBlack text-xl font-heading border-4 border-inkBlack rounded-xl shadow-toon hover:bg-vintageRed hover:text-white hover:scale-105 transition-all"
      >
        🔄 Play Again
      </button>
    </div>
  );
};

export default GameOver;
