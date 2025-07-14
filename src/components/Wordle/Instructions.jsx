const Instructions = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-warmYellow p-6 rounded-2xl border-4 border-inkBlack shadow-toon w-[350px] font-body text-inkBlack">
        <h2 className="text-3xl font-heading text-vintageRed drop-shadow-[3px_3px_0_#3B3A30] mb-4 text-center">
          🎯 How to Play
        </h2>

        <p className="text-sm mb-6 leading-relaxed">
          Guess the hidden word in <span className="font-bold">6 tries</span>.
          Each guess must be a valid 5-letter word. After each guess, the
          colors of the tiles will change to show how close your guess was to
          the word.
        </p>

        {/* Visual Examples */}
        <div className="space-y-5">

          {/* First Row */}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-softGreen text-inkBlack font-heading rounded-lg border-2 border-inkBlack shadow-toon flex items-center justify-center">W</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">O</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">R</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">D</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">S</div>
            </div>
            <p className="text-sm">
              The letter <span className="font-bold text-softGreen">W</span> is
              in the word and in the correct spot.
            </p>
          </div>

          {/* Second Row */}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">T</div>
              <div className="w-10 h-10 bg-warmYellow text-inkBlack font-heading rounded-lg border-2 border-inkBlack shadow-toon flex items-center justify-center">E</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">S</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">T</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">S</div>
            </div>
            <p className="text-sm">
              The letter <span className="font-bold text-warmYellow">E</span>{" "}
              is in the word but in the wrong spot.
            </p>
          </div>

          {/* Third Row */}
          <div className="space-y-1">
            <div className="flex space-x-2">
              <div className="w-10 h-10 bg-vintageRed text-white font-heading rounded-lg border-2 border-inkBlack shadow-toon flex items-center justify-center">P</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">L</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">A</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">Y</div>
              <div className="w-10 h-10 bg-parchment text-inkBlack font-heading rounded-lg border-2 border-inkBlack flex items-center justify-center">S</div>
            </div>
            <p className="text-sm">
              The letter <span className="font-bold text-vintageRed">P</span> is
              not in the word at all.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="font-heading text-lg text-inkBlack drop-shadow-[1px_1px_0_#3B3A30]">🧠 Good luck!</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
