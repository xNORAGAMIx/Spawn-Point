import { useState } from "react";
import TypingBox from "../../components/TypingTest/TypingBox";
import Results from "../../components/TypingTest/Results";

const sentences = [
  "from intense battle scenes to heartwarming slice-of-life moments, anime continues to captivate audiences across the globe with its unique storytelling.",
  "behind every great anime lies a powerful message wrapped in vibrant visuals and unforgettable soundtracks.",
  "the emotional rollercoaster of a single season can leave fans feeling inspired, devastated, and eager for more all at once.",
  "from epic sagas that span generations to quiet, introspective tales that capture a single fleeting moment, anime has the rare ability to both entertain and enlighten, making it one of the most versatile and impactful storytelling mediums in the world.",
];

const Typing = () => {
  const [originalText, setOriginalText] = useState(
    sentences[Math.floor(Math.random() * sentences.length)]
  );
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (value) => {
    if (!startTime) setStartTime(Date.now());
    if (value === originalText) setEndTime(Date.now());
    setUserInput(value);
  };

  const handleRestart = () => {
    setOriginalText(sentences[Math.floor(Math.random() * sentences.length)]);
    setStartTime(null);
    setEndTime(null);
    setUserInput("");
  };

  return (
    <div className="min-h-screen w-full bg-parchment text-inkBlack px-4 py-10 flex flex-col items-center font-body">
      <h1 className="text-4xl font-heading text-vintageRed mb-8 drop-shadow-[2px_2px_0_#3B3A30]">
        ⌨️ Typing Speed Test
      </h1>

      <div className="w-full max-w-2xl space-y-6">
        <TypingBox
          text={originalText}
          userInput={userInput}
          onInputChange={handleInputChange}
          disabled={!!endTime}
        />

        {endTime && (
          <Results
            originalText={originalText}
            userInput={userInput}
            startTime={startTime}
            endTime={endTime}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Typing;
