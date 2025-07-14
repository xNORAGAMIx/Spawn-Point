/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt, setDisabledLetters } = useContext(GameContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord.toUpperCase()[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > attemptVal
      ? correct
        ? "correct"
        : almost
        ? "almost"
        : "error"
      : "";

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);

  const baseStyle =
    "w-12 h-14 flex items-center justify-center font-heading text-3xl uppercase rounded-md border-4 border-inkBlack shadow-toon transition-all duration-300";

  const getColorStyle = () => {
    switch (letterState) {
      case "correct":
        return "bg-softGreen text-inkBlack scale-105";
      case "almost":
        return "bg-warmYellow text-inkBlack scale-105";
      case "error":
        return "bg-vintageRed text-white scale-105";
      default:
        return "bg-parchment text-inkBlack";
    }
  };

  return (
    <div className={`${baseStyle} ${getColorStyle()}`}>
      {letter}
    </div>
  );
};

export default Letter;
