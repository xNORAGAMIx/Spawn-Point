/* eslint-disable react/prop-types */
const Results = ({
  originalText,
  userInput,
  startTime,
  endTime,
  onRestart,
}) => {
  const timeInMinutes = (endTime - startTime) / 1000 / 60;
  const wordsTyped = userInput.trim().split(/\s+/).length;
  const wpm = Math.round(wordsTyped / timeInMinutes || 0);
  const correctChars = userInput
    .split("")
    .filter((char, idx) => char === originalText[idx]).length;
  const accuracy = Math.round((correctChars / originalText.length) * 100 || 0);
  const timeTaken = ((endTime - startTime) / 1000).toFixed(1);

  return (
    <div className="mt-8 mx-auto max-w-md p-6 bg-parchment border-4 border-inkBlack shadow-toon rounded-xl text-inkBlack font-heading space-y-4 text-center">
      <h2 className="text-3xl text-vintageRed drop-shadow-[2px_2px_0_#3B3A30]">
        🧠 Results
      </h2>
      <p className="text-lg">🚀 <strong>WPM:</strong> {wpm}</p>
      <p className="text-lg">🎯 <strong>Accuracy:</strong> {accuracy}%</p>
      <p className="text-lg">⏱️ <strong>Time Taken:</strong> {timeTaken}s</p>

      <button
        onClick={onRestart}
        className="mt-4 px-6 py-2 bg-softGreen border-4 border-inkBlack rounded-lg font-bold text-inkBlack hover:bg-warmYellow transition duration-200 shadow-toon"
      >
        🔁 Restart Test
      </button>
    </div>
  );
};

export default Results;
