import { useState } from 'react'
import Gameboard from "./components/gameboard.jsx";
import Header from "./components/header.jsx";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);

  function startGame() {
    setShowGame(true);
  }

  return (
    <>
      <Header score={score} />
      {!showGame &&
      <div>
        <button className="nes-btn is-primary" onClick={startGame}>Lets Play!</button>
      </div>}
      {showGame && <Gameboard setScore={setScore} setShowGame={setShowGame} />}
    </>
  )
}

export default App
