import { useState } from "react";
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="p-2">
            <header className="bg-gray-800 sticky top-0 z-50 px-4 rounded-2xl shadow-2xl shadow-gray-600 border-4 border-slate-200">
                <div className="container mx-auto flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <h1 className="font-extrabold text-white text-3xl underline cursor-pointer">GAMERS</h1>
                    </div>
                    
                    {/* Hamburger menu for mobile view */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Nav items for desktop view */}
                    <nav className="hidden md:flex md:flex-grow justify-center">
                        <ul className="flex justify-center space-x-4 text-white text-2xl">
                            <li>
                                <a href="#" className="font-extrabold hover:underline">HOME</a>
                            </li>
                            <li>
                                <a href="#" className="font-extrabold hover:underline">WORDLE</a>
                            </li>
                        </ul>
                    </nav>
                    
                    {/* Extra buttons - visible only on large screens */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <a href="#" className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block">Github</a>
                        <a href="#" className="bg-blue-500 hover:bg-green-500 text-white font-semibold px-4 py-2 rounded inline-block">Download</a>
                    </div>
                </div>
                
                {/* Nav items for mobile view - displayed when hamburger is clicked */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <ul className="flex flex-col space-y-4 mt-4 text-white text-2xl">
                            <li>
                                <a href="#" className="font-extrabold hover:underline">HOME</a>
                            </li>
                            <li>
                                <a href="#" className="font-extrabold hover:underline">WORDLE</a>
                            </li>
                        </ul>
                    </div>
                )}
            </header>
        </div>
    )
}

export default Header;
