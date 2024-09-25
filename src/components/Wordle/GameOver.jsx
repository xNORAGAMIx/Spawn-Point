import { useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const GameOver = () => {
    const { gameOver, currAttempt, correctWord } = useContext(GameContext);
    const playAgain = () => {
        window.location.reload();
    }
    return (
        <div className="flex justify-around items-center space-x-4">
            <h3 className={`font-extrabold text-xl ${gameOver.guessedWord ? 'text-green-600' : 'text-red-600'}`}>{gameOver.guessedWord ? "CORRECT" : "INCORRECT"}</h3>
            {!gameOver.guessedWord && (<h1 className="font-extrabold uppercase text-black text-xl">
                {correctWord}
            </h1>)}
            {gameOver.guessedWord && (<h3 className="text-green-500 font-extrabold">You guessed in {currAttempt.attempt} attempts.</h3>)}
            <button onClick={playAgain} className="p-3 rounded-lg text-xl font-extrabold hover:text-white bg-transparent hover:bg-black hover:shadow-2xl border-black border-2 text-black">
                Play Again
            </button>
        </div>
    )
}

export default GameOver;
