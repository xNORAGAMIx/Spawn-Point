/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { GameContext } from "../../contextAPI/gamerContext";

const Key = ({ keyVal, disabled }) => {
    const { onDelete, onEnter, onSelectLetter, gameOver } = useContext(GameContext);

    const selectLetter = () => {
        if (gameOver.gameOver) return;
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
        //console.log(`Disabled ${disabled}`);
    };
    return (
        <div
            className={`bg-slate-800 font-extrabold text-white text-lg p-2 w-fit min-w-[40px] text-center cursor-pointer rounded-lg border-2 border-slate-800 ${disabled ? 'bg-disabled' : ''}`}
            onClick={selectLetter}
        >
            {keyVal}
        </div>
    )
}

export default Key
