/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Letter = ({ letterPos, attemptVal }) => {
    const { board, correctWord, currAttempt, setDisabledLetters } = useContext(GameContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            console.log(letter);
            setDisabledLetters((prev) => [...prev, letter])
        }
    }, [currAttempt.attempt])
    return (
        <div className={`p-2 w-12 h-14 rounded-sm font-extrabold text-2xl flex items-center justify-center  ${(letterState === "correct") ? 'bg-green-500' : (letterState === "almost") ? 'bg-yellow-400' : (letterState === "error") ? 'bg-red-500' : 'bg-slate-200'} `} >
            <h1 className="">{letter}</h1>
        </div>
    );
};

export default Letter;
