import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./contextAPI/gamerContext";
import Header from "./components/Header";
import Wordle from "./Pages/Wordle/Wordle";
import Home from "./Pages/Home";
import Tic from "./Pages/TicTacToe/Tic";
import Typing from "./Pages/TypingTest/Typing";
import Rock from "./Pages/RockPaperScissor/Rock";
import Flappy from "./Pages/FlappyBird/Flappy";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <div className="min-h-screen bg-parchment font-body text-inkBlack">
          <Header />
          <main className="px-4 py-6 max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wordle" element={<Wordle />} />
              <Route path="/tictactoe" element={<Tic />} />
              <Route path="/typing" element={<Typing />} />
              <Route path="/rock" element={<Rock />} />
              <Route path="/flappy bird" element={<Flappy />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ContextProvider>
  );
};

export default App;
