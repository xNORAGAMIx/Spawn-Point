/* eslint-disable react/prop-types */
import { useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Key = ({ keyVal, disabled }) => {
  const { onDelete, onEnter, onSelectLetter, gameOver } = useContext(GameContext);

  const selectLetter = () => {
    if (gameOver.gameOver || disabled) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div
      onClick={selectLetter}
      className={`min-w-[42px] px-3 py-2 text-center font-heading text-xl rounded-md border-4
        ${
          disabled
            ? "bg-gray-400 text-gray-700 border-inkBlack cursor-not-allowed"
            : "bg-warmYellow text-inkBlack hover:bg-softGreen hover:scale-105 cursor-pointer"
        }
        border-inkBlack shadow-toon transition-all select-none`}
    >
      {keyVal}
    </div>
  );
};

export default Key;
