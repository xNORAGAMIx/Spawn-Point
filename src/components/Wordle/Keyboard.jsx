import Key from "./Key";
import { useEffect, useCallback, useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { onDelete, onEnter, onSelectLetter, disabledLetters, currAttempt, gameOver } =
    useContext(GameContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      const key = event.key.toUpperCase();

      if (key === "ENTER") {
        onEnter();
      } else if (key === "BACKSPACE") {
        onDelete();
      } else if ([...keys1, ...keys2, ...keys3].includes(key)) {
        onSelectLetter(key);
      }
    },
    [currAttempt]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => document.removeEventListener("keydown", handleKeyboard);
  }, [handleKeyboard]);

  return (
    <div className="mt-6 flex flex-col items-center justify-center space-y-3 p-4 bg-parchment rounded-2xl border-4 border-inkBlack shadow-toon w-full max-w-[700px] mx-auto font-heading">
      {/* Row 1 */}
      <div className="flex justify-center gap-2 flex-wrap">
        {keys1.map((key) => (
          <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex justify-center gap-2 flex-wrap">
        {keys2.map((key) => (
          <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex justify-center gap-2 flex-wrap">
        <Key keyVal={"ENTER"} />
        {keys3.map((key) => (
          <Key
            key={key}
            keyVal={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
        <Key keyVal={"DELETE"} />
      </div>
    </div>
  );
};

export default Keyboard;
