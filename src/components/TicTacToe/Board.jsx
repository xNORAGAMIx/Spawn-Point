/* eslint-disable react/prop-types */
import Cell from './Cell';

const Board = ({ cells, onCellClick }) => {
  return (
    <div className="grid grid-cols-3 gap-3 w-[300px] mx-auto mt-8 bg-warmYellow p-4 rounded-2xl border-4 border-inkBlack shadow-toon">
      {cells.map((value, idx) => (
        <Cell key={idx} value={value} onClick={() => onCellClick(idx)} />
      ))}
    </div>
  );
};

export default Board;
