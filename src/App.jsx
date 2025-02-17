import { useState } from 'react'
import './App.css'
import Gameboard from "./components/gameboard.jsx";

function App() {
  const [showGame, setShowGame] = useState(false);

  function startGame() {
    setShowGame(true);
  }

  return (
    <>
      {!showGame &&
      <div>
        <button onClick={startGame}>Lets Play!</button>
      </div>}
      { showGame && <Gameboard /> }
    </>
  )
}

export default App
