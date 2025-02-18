import {useEffect, useState} from 'react'
import Gameboard from "./components/gameboard.jsx";
import Header from "./components/header.jsx";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(getHighestScore);
  const [difficulty, setDifficulty] = useState(10);

  function getHighestScore() {
    const score = localStorage.getItem("highestScore");
    if (score) return score
    else return 0;
  }

  function startGame() {
    setShowGame(true);
  }

  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score);
      localStorage.setItem("highestScore", score.toString());
    }
  }, [score]);

  return (
    <>
      <Header score={score} highestScore={highestScore} showScoreboard={showGame} setDifficulty={setDifficulty} />
      {!showGame &&
      <div>
        <button className="nes-btn is-primary" onClick={startGame}>Lets Play!</button>
      </div>}
      {showGame && <Gameboard itemCount={difficulty} setScore={setScore} setShowGame={setShowGame} />}
    </>
  )
}

export default App
