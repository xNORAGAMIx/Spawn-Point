import { Link } from "react-router-dom";

const games = [
  {
    name: "Wordle",
    path: "/wordle",
    desc: "Guess the word in 6 tries!",
    color: "bg-yellow-300",
    badge: "🔥 Popular",
  },
  {
    name: "Tic Tac Toe",
    path: "/tic",
    desc: "Classic X & O showdown!",
    color: "bg-red-300",
  },
  {
    name: "Circle Clicker",
    path: "/circle",
    desc: "Click fast. Score big!",
    color: "bg-green-300",
    badge: "🆕 New",
  },
  {
    name: "Typing Test",
    path: "/typing",
    desc: "How fast can you type?",
    color: "bg-blue-300",
  },
  {
    name: "Rock Paper Scissors",
    path: "/rock",
    desc: "Rock beats Scissors!",
    color: "bg-pink-300",
  },
  {
    name: "Flappy Bird",
    path: "/flappy",
    desc: "Fly through the pipes!",
    color: "bg-purple-300",
  },
];

const Home = () => {

  return (
    <div className="min-h-screen font-body text-inkBlack p-6 space-y-16">
      {/* Top Banner */}
      <div className="bg-indigo-100 border-4 border-indigo-600 text-center py-3 rounded-lg font-heading text-xl shadow-toon">
        🧠 Fun. Fast. Addictive. — Challenge yourself anytime!
      </div>

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-heading mb-4 drop-shadow">🎮 Vintage Mini-Game Arcade</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Welcome to a playful world of nostalgia! This mini-game arcade features a mix of retro vibes and modern fun, handcrafted to remind you of Saturday mornings, cartoons, and coin-operated arcade machines.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-[#fff3d6] p-6 rounded-xl border-4 border-inkBlack shadow-toon max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading mb-3">🕹️ What’s Inside?</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>🎯 Brain-teasing puzzles like Wordle & Tic Tac Toe</li>
          <li>💥 Reflex games like Flappy Bird & Circle Clicker</li>
          <li>⌨️ Speed typing challenges</li>
          <li>🎲 Luck-based classics like Rock-Paper-Scissors</li>
        </ul>
      </section>

      {/* Games Grid */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading text-center mb-8">🎉 Featured Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Link
              key={index}
              to={game.path}
              className={`relative rounded-xl border-4 border-inkBlack shadow-toon p-6 hover:scale-105 transition-all duration-300 ${game.color}`}
            >
              {game.badge && (
                <span className="absolute top-2 right-2 bg-white border border-black px-2 py-0.5 text-xs font-bold rounded shadow-toon">
                  {game.badge}
                </span>
              )}
              <h3 className="text-2xl font-bold font-heading">{game.name}</h3>
              <p className="text-sm mt-2">{game.desc}</p>
              <span className="inline-block mt-4 px-4 py-1 bg-white border-2 border-inkBlack text-sm font-bold rounded-lg">
                Play Now →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Creator Bio */}
      <section className="max-w-3xl mx-auto bg-indigo-50 p-6 border-4 border-indigo-400 rounded-xl shadow-toon">
        <h2 className="text-2xl font-bold font-heading mb-2">👾 About the Creator</h2>
        <p className="text-base">
          Hi, I’m <strong>Manas</strong> — a full-stack developer who loves clean UI, fast games, and nostalgia-packed experiences. This project is a labor of fun, learning, and 90s vibes. If you liked it, share it with friends or contribute on GitHub!
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-xl font-semibold">📢 Got a game idea or suggestion?</p>
        <p className="text-base mb-4">Let’s make it happen. This arcade is always growing!</p>
        <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-toon">
          Submit Your Idea
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-sm">
        <p>
          Crafted with ❤️ by <span className="font-bold">Manas</span> | Vintage Edition 🕹️
        </p>
      </footer>
    </div>
  );
};

export default Home;
