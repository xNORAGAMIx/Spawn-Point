import Key from "./Key";
import { useEffect, useCallback, useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Keyboard = () => {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const { onDelete, onEnter, onSelectLetter, disabledLetters, currAttempt, gameOver } = useContext(GameContext);

    const handleKeyboard = useCallback((event) => {
        if (gameOver.gameOver) return;
        if (event.key === "Enter") {
            onEnter();
        } else if (event.key === "Backspace") {
            onDelete();
        } else {
            keys1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
            keys2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
            keys3.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                }
            });
        }
    }, [currAttempt]);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);

        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        };
    }, [handleKeyboard]);

    //console.log(disabledLetters);
    return (
        <div className="space-y-1" onKeyDown={handleKeyboard}>
            {/* First Row */}
            <div className="flex justify-evenly items-center space-x-1">
                {keys1.map((key, index) => (
                    <Key
                        key={index}
                        keyVal={key}
                        disabled={disabledLetters.includes(key)}
                        className="w-8 h-8 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-xs sm:text-xs md:text-sm lg:text-base"
                    />
                ))}
            </div>

            {/* Second Row */}
            <div className="flex justify-evenly items-center space-x-1">
                {keys2.map((key, index) => (
                    <Key
                        key={index}
                        keyVal={key}
                        disabled={disabledLetters.includes(key)}
                        className="w-8 h-8 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-xs sm:text-xs md:text-sm lg:text-base"
                    />
                ))}
            </div>

            {/* Third Row */}
            <div className="flex justify-evenly items-center space-x-1">
                <Key keyVal={"ENTER"} className="w-10 h-8 sm:w-8 sm:h-6 md:w-12 md:h-10 lg:w-14 lg:h-12 text-xs sm:text-xs md:text-sm lg:text-base" />
                {keys3.map((key, index) => (
                    <Key
                        key={index}
                        keyVal={key}
                        disabled={disabledLetters.includes(key)}
                        className="w-8 h-8 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 text-xs sm:text-xs md:text-sm lg:text-base"
                    />
                ))}
                <Key keyVal={"DELETE"} className="w-10 h-8 sm:w-8 sm:h-6 md:w-12 md:h-10 lg:w-14 lg:h-12 text-xs sm:text-xs md:text-sm lg:text-base" />
            </div>
        </div>

    );
};

export default Keyboard;
