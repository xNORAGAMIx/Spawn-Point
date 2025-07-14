import Board from "../../components/Wordle/Board";
import Keyboard from "../../components/Wordle/Keyboard";
import GameOver from "../../components/Wordle/GameOver";
import Instructions from "../../components/Wordle/Instructions";
import { useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Wordle = () => {
  const { gameOver } = useContext(GameContext);

  return (
    <div className="min-h-screen w-full bg-parchment font-body text-inkBlack flex flex-col lg:flex-row justify-center items-start lg:items-center px-4 py-10 space-y-10 lg:space-y-0 lg:space-x-10 -mt-20">
      
      {/* Instructions panel */}
      <div className="w-full lg:w-[350px]">
        <Instructions />
      </div>

      {/* Game area */}
      <div className="flex flex-col items-center justify-center space-y-12">
        <h1 className="text-4xl font-heading text-vintageRed drop-shadow-[2px_2px_0_#3B3A30]">
          🎮 Wordle Arcade
        </h1>

        <Board />

        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </div>
    </div>
  );
};

export default Wordle;
