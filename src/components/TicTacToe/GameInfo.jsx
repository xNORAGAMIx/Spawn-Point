/* eslint-disable react/prop-types */

const GameInfo = ({ currentPlayer, winner }) => {
  return (
    <div className="text-2xl font-heading text-inkBlack text-center mt-4 drop-shadow-[2px_2px_0_#3B3A30]">
      {winner === 'Tie' ? (
        <p className="text-warmYellow animate-pulse">🎭 It’s a Tie!</p>
      ) : winner ? (
        <p className="text-softGreen animate-bounce">
          🏆 Winner: <span className="text-vintageRed">{winner}</span>
        </p>
      ) : (
        <p>
          🎮 Current Turn:{" "}
          <span className="text-vintageRed font-bold">{currentPlayer}</span>
        </p>
      )}
    </div>
  );
};

export default GameInfo;
