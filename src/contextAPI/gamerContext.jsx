/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { boardDefault, generateWordSet } from "../utils/Wordle/Words";

const GameContext = createContext();

const ContextProvider = ({ children }) => {
    const [board, setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [correctWord, setCorrectWord] = useState("");
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet);
            setCorrectWord(words.todaysWord);
            
        });
    }, []);

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) {
            return;
        }
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    };

    const onDelete = () => {
        if (currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard);
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
    };

    const onEnter = () => {
        console.log(correctWord);
        if (currAttempt.letterPos != 5) {
            return;
        }

        let currentWord = "";
        for (let x = 0; x < 5; x++) {
            currentWord += board[currAttempt.attempt][x];
        }
        if (wordSet.has(currentWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
        } else {
            alert("Word not found");
        }
        console.log(currentWord);
        if (currentWord === correctWord.toUpperCase()) {
            setGameOver({ gameOver: true, guessedWord: true });
            return;
        }
        //console.log(currAttempt);
        if (currAttempt.attempt === 5) {
            setGameOver({ gameOver: true, guessedWord: false });
            return;
        }
        //console.log(disabledLetters);
    };


    return (
        <GameContext.Provider value={{ disabledLetters, setDisabledLetters, board, setBoard, currAttempt, setCurrAttempt, onDelete, onEnter, onSelectLetter, correctWord, gameOver, setGameOver }}>
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, ContextProvider };