import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ContextProvider } from "./contextAPI/gamerContext"
import Header from "./components/Header"
import Wordle from "./Pages/Wordle/Wordle";
import Home from "./Pages/Home";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wordle" element={<Wordle/>}/>
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App
