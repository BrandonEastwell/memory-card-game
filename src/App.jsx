import {useEffect, useState} from 'react'
import Gameboard from "./components/gameboard.jsx";
import Header from "./components/header.jsx";

function App() {
  const [showGame, setShowGame] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [highestScore, setHighestScore] = useState(getHighestScore);
  const [cardCount, setCardCount] = useState(10);
  const [score, setScore] = useState({scoreLimit: 10, score: 0});


  function getHighestScore() {
    const score = localStorage.getItem("highestScore");
    if (score) return score
    else return 0;
  }

  function continueGame() {
    setShowGame(true);
    setGameWon(false);
    setGameLost(false);
    setScore({scoreLimit: (parseInt(score.scoreLimit) + parseInt(cardCount)), score: score.score});
  }

  function startGame() {
    setShowGame(true);
    setGameWon(false);
    setGameLost(false);
    setScore({scoreLimit: cardCount, score: 0});
  }

  function endGame() {
    setShowGame(false);
    setGameWon(false);
    setGameLost(false);
    setScore({scoreLimit: cardCount, score: 0});
  }

  function incrementScore() {
    setScore(prev => ({...prev, score: prev.score + 1}));
  }

  useEffect(() => {
    if (score.score > highestScore) {
      setHighestScore(score.score);
      localStorage.setItem("highestScore", score.score.toString());
    }
  }, [score]);

  useEffect(() => {
    // Only reset score when game is *starting fresh* (not continuing)
    if (!gameWon) {
      setScore({ score: 0, scoreLimit: cardCount });
    }
  }, [cardCount]);

  return (
    <>
      <Header score={score} highestScore={highestScore} showScoreboard={showGame} cardCount={cardCount} setCardCount={setCardCount} />
      {!showGame && !gameLost && !gameWon &&
          <div className="nes-container is-rounded is-dark" style={{margin: "75px"}}>
            <p style={{padding: "30px"}}>Do not click the same pokemon card twice!</p>
            <button className="nes-btn is-primary" style={{margin: "20px"}} onClick={startGame}>Lets Play!</button>
          </div>
      }
      {showGame && <Gameboard cardCount={cardCount} incrementScore={incrementScore} gameStates={{setShowGame, setGameLost, setGameWon}} />}
      {gameLost &&
          <div className="nes-container is-rounded is-dark" style={{margin: "75px"}}>
            <p style={{padding: "30px"}}>Game Over!</p>
            <p style={{padding: "30px"}}>your final score is {score.score}</p>
            <button className="nes-btn is-primary" style={{margin: "20px"}} onClick={startGame}>Try Again!</button>
          </div>
      }
      {gameWon &&
          <div className="nes-container is-rounded is-dark" style={{margin: "75px"}}>
            <p style={{padding: "30px"}}>You Won!</p>
            <p style={{padding: "30px"}}>your score is {score.score}</p>
            <p style={{padding: "30px"}}>Would you like to continue?</p>
            <button className="nes-btn is-primary" style={{margin: "20px"}} onClick={continueGame}>Yes</button>
            <button className="nes-btn is-primary" style={{margin: "20px"}} onClick={endGame}>No</button>
          </div>
      }
    </>
  )
}

export default App
