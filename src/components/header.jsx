import Scoreboard from "./scoreboard.jsx";
import img from "../assets/International_Pokémon_logo.svg.png"

function Header({score, highestScore, showScoreboard, setDifficulty}) {

    return (
        <header>
            <h1>Memory Game with <img className="poke-logo" src={img} alt="Pokemon"/></h1>
            {showScoreboard && <Scoreboard score={score} highestScore={highestScore} setDifficulty={setDifficulty} />}
        </header>
    )
}

export default Header