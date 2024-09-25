import Board from "../../components/Wordle/Board";
import Keyboard from "../../components/Wordle/Keyboard";
import GameOver from "../../components/Wordle/GameOver";
import Instructions from "../../components/Wordle/Instructions";
import { useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Wordle = () => {
    const { gameOver } = useContext(GameContext);
    return (
        <div className="flex justify-evenly items-center">
            <Instructions></Instructions>
            <div className="mt-10 space-y-16 flex flex-col items-center justify-center">
                <Board></Board>
                {gameOver.gameOver ? <GameOver></GameOver> : <Keyboard></Keyboard>}
            </div>
        </div>
    )
}

export default Wordle
