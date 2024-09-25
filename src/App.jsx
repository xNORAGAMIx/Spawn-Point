import Header from "./components/Header"
import { ContextProvider } from "./contextAPI/gamerContext"
import Wordle from "./Pages/Wordle/Wordle";

const App = () => {
  return (
    <ContextProvider>
      <Header></Header>
      <Wordle></Wordle> {/**Add resest button */}
    </ContextProvider>
  )
}

export default App
