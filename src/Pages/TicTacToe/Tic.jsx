import { useState } from "react";
import Board from "../../components/TicTacToe/Board";
import GameInfo from "../../components/TicTacToe/GameInfo";

const Tic = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return squares.every((cell) => cell !== null) ? "Tie" : null;
  };

  const handleClick = (index) => {
    if (cells[index] || winner) return;
    const nextCells = [...cells];
    nextCells[index] = isXTurn ? "X" : "O";
    setCells(nextCells);
    const gameResult = checkWinner(nextCells);
    if (gameResult) {
      setWinner(gameResult);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <div className="text-center mt-10 font-body text-inkBlack">
      <h1 className="text-5xl font-heading text-vintageRed drop-shadow-[4px_4px_0_#3B3A30] mb-6">
        🕹️ TIC-TAC-TOE
      </h1>

      <GameInfo currentPlayer={isXTurn ? "X" : "O"} winner={winner} />

      <Board cells={cells} onCellClick={handleClick} />

      <button
        onClick={resetGame}
        className="mt-8 px-6 py-3 bg-softGreen text-inkBlack font-heading text-xl border-4 border-inkBlack rounded-xl shadow-toon hover:bg-vintageRed hover:text-white transition-all hover:scale-105"
      >
        Reset Game
      </button>
    </div>
  );
};

export default Tic;
