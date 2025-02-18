import { useState } from 'react'
import Gameboard from "./components/gameboard.jsx";
import Header from "./components/header.jsx";

function App() {
  const [showGame, setShowGame] = useState(false);

  function startGame() {
    setShowGame(true);
  }

  return (
    <>
      <Header />
      {!showGame &&
      <div>
        <button className="nes-btn is-primary" onClick={startGame}>Lets Play!</button>
      </div>}
      {showGame && <Gameboard />}
    </>
  )
}

export default App
