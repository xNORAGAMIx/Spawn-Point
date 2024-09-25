const Instructions = () => {
    return (
        <div className="mt-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-xl w-80">
                <h2 className="text-2xl font-bold mb-4">How to Play</h2>
                <p className="text-sm mb-6">Guess the hidden word in 6 tries. Each guess must be a valid 5-letter word. After each guess, the color of the tiles will change to show how close your guess was to the word.</p>

                {/* Visual Examples */}
                <div className="space-y-4">

                    {/* First Row Example */}
                    <div className="flex space-x-1">
                        <div className="w-10 h-10 bg-green-500 text-white font-bold flex items-center justify-center">W</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">O</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">R</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">D</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">S</div>
                    </div>
                    <p className="text-sm">The letter <span className="font-bold text-green-600">W</span> is in the word and in the correct spot.</p>

                    {/* Second Row Example */}
                    <div className="flex space-x-1">
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">T</div>
                        <div className="w-10 h-10 bg-yellow-500 text-white font-bold flex items-center justify-center">E</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">S</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">T</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">S</div>
                    </div>
                    <p className="text-sm">The letter <span className="font-bold text-yellow-500">E</span> is in the word but in the wrong spot.</p>

                    {/* Third Row Example */}
                    <div className="flex space-x-1">
                        <div className="w-10 h-10 bg-red-500 text-black font-bold flex items-center justify-center">P</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">L</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">A</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">Y</div>
                        <div className="w-10 h-10 bg-gray-300 text-black font-bold flex items-center justify-center">S</div>
                    </div>
                    <p className="text-sm">The letter <span className="font-bold text-red-500">P</span> is not in the word at all.</p>

                </div>

                <div className="mt-6 text-center">
                    <p className="font-bold">Good luck!</p>
                </div>
            </div>
        </div>
    )
}

export default Instructions
