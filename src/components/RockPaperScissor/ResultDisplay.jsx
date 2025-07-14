/* eslint-disable react/prop-types */
const ResultDisplay = ({ userChoice, computerChoice, result, onPlayAgain }) => {
  return (
    <div className="mt-6 space-y-4 text-center font-body text-inkBlack">
      <p className="text-lg font-semibold">
        <strong>You chose:</strong> <span className="font-heading">{userChoice}</span>
      </p>
      <p className="text-lg font-semibold">
        <strong>Computer chose:</strong> <span className="font-heading">{computerChoice}</span>
      </p>

      <p
        className={`text-2xl font-heading drop-shadow-[2px_2px_0_#3B3A30] ${
          result === "You Win!"
            ? "text-softGreen"
            : result === "You Lose!"
            ? "text-vintageRed"
            : "text-warmYellow"
        }`}
      >
        {result}
      </p>

      <button
        onClick={onPlayAgain}
        className="mt-4 px-6 py-2 text-xl font-heading rounded-full bg-warmYellow text-inkBlack border-4 border-inkBlack shadow-toon hover:scale-105 hover:bg-softGreen hover:text-white transition-all"
      >
        Play Again
      </button>
    </div>
  );
};

export default ResultDisplay;
