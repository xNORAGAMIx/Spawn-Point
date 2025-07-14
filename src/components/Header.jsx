import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="p-2 font-body bg-parchment">
      <header className="bg-warmYellow sticky top-0 z-50 px-4 rounded-2xl border-4 border-inkBlack shadow-toon">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="font-heading text-4xl text-vintageRed drop-shadow-[2px_2px_0_#3B3A30] cursor-pointer hover:scale-105 transition-transform">
              🎮 RESPAWN
            </h1>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-inkBlack hover:text-vintageRed transition-transform transform hover:scale-110"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:flex-grow justify-center">
            <ul className="flex justify-center space-x-6 text-2xl text-inkBlack">
              {["HOME", "WORDLE", "TYPING", "ROCK", "FLAPPY BIRD", "TIC-TAC-TOE"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={
                      item === "HOME"
                        ? "/"
                        : `/${item.toLowerCase().replace(/-/g, "")}`
                    }
                    className="font-heading  decoration-vintageRed hover:text-vintageRed transition-all"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://github.com/xNORAGAMIx/Spawn-Point.git" target="_blank"
              className="bg-softGreen text-inkBlack font-heading px-4 py-2 rounded-xl border-2 border-inkBlack shadow-toon hover:bg-vintageRed hover:text-white transition-all"
            >
              Github
            </a>
            <a
              href="https://github.com/xNORAGAMIx/Spawn-Point/archive/refs/heads/main.zip"
              download
              className="bg-vintageRed text-white font-heading px-4 py-2 rounded-xl border-2 border-inkBlack shadow-toon hover:bg-softGreen hover:text-inkBlack transition-all"
            >
              Download
            </a>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <ul className="flex flex-col space-y-3 text-2xl text-inkBlack">
              {["HOME", "WORDLE","TYPING", "ROCK", "FLAPPY BIRD", "TIC-TAC-TOE"].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={
                      item === "HOME"
                        ? "/"
                        : `/${item.toLowerCase().replace(/-/g, "")}`
                    }
                    className="font-heading hover:underline hover:text-vintageRed"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
