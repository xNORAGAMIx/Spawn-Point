import Letter from './Letter';

const Board = () => {
  return (
    <div className="space-y-3 bg-warmYellow p-4 rounded-2xl border-4 border-inkBlack shadow-toon inline-block mx-auto mt-6">
      {[...Array(6)].map((_, attemptVal) => (
        <div key={attemptVal} className="flex space-x-3">
          {[...Array(5)].map((_, letterPos) => (
            <Letter key={letterPos} letterPos={letterPos} attemptVal={attemptVal} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
