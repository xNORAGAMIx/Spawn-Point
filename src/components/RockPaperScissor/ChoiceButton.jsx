/* eslint-disable react/prop-types */
const ChoiceButton = ({ choice, onClick }) => {
  const colors = {
    Rock: 'bg-red-500',
    Paper: 'bg-blue-500',
    Scissors: 'bg-green-500',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-xl font-heading text-white shadow-toon border-4 border-inkBlack transition-transform duration-200 ease-in-out hover:scale-110 hover:rotate-[2deg] active:scale-95 ${colors[choice]}`}
    >
      {choice}
    </button>
  );
};

export default ChoiceButton;
