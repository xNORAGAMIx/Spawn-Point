/* eslint-disable react/prop-types */
const TypingBox = ({ text, userInput, onInputChange, disabled }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Prompt Text */}
      <p className="text-xl font-heading bg-parchment border-4 border-inkBlack shadow-toon rounded-xl p-4 text-inkBlack">
        {text}
      </p>

      {/* Textarea */}
      <textarea
        className={`w-full font-heading text-lg rounded-xl border-4 border-inkBlack p-4 resize-none h-36 transition-all shadow-toon outline-none
          ${
            disabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-warmYellow text-inkBlack placeholder:text-inkBlack"
          }`}
        value={userInput}
        onChange={(e) => onInputChange(e.target.value)}
        disabled={disabled}
        placeholder="Start typing here..."
      />
    </div>
  );
};

export default TypingBox;
