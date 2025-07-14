import { useState } from 'react';
import ChoiceButton from './ChoiceButton';
import ResultDisplay from './ResultDisplay';

const choices = ["Rock", "Paper", "Scissors"];

const Game = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const getResult = (user, computer) => {
    if (user === computer) return "Draw";
    if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      setScore(score + 1);
      return "You Win!";
    }
    return "You Lose!";
  };

  const handleChoice = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    const outcome = getResult(choice, randomChoice);
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    setResult(outcome);
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div className="bg-parchment border-4 border-inkBlack shadow-toon rounded-2xl w-full max-w-md mx-auto p-6 text-center font-body text-inkBlack">
      <h1 className="text-4xl font-heading text-vintageRed mb-4 drop-shadow-[2px_2px_0_#3B3A30]">
        ✊ Rock Paper Scissors ✌️
      </h1>

      <p className="mb-4 text-xl">
        🎮 Score: <span className="text-inkBlack font-extrabold">{score}</span>
      </p>

      {!result ? (
        <div className="mt-6 p-4">
          {choices.map((choice) => (
            <ChoiceButton
              key={choice}
              choice={choice}
              onClick={() => handleChoice(choice)}
            />
          ))}
        </div>
      ) : (
        <ResultDisplay
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
          onPlayAgain={resetGame}
        />
      )}
    </div>
  );
};

export default Game;
