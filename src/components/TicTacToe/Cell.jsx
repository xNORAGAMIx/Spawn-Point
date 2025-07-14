/* eslint-disable react/prop-types */

const Cell = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[90px] h-[90px] flex items-center justify-center text-4xl font-heading rounded-xl
      border-4 border-inkBlack shadow-toon cursor-pointer select-none 
      transition-all duration-150 ease-in-out
      ${
        value === 'X'
          ? 'text-vintageRed'
          : value === 'O'
          ? 'text-softGreen'
          : 'hover:bg-warmYellow'
      } hover:scale-105`}
    >
      {value}
    </div>
  );
};

export default Cell;
