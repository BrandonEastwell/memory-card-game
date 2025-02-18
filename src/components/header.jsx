import Scoreboard from "./scoreboard.jsx";
import img from "../assets/International_Pokémon_logo.svg.png"

function Header() {


    return (
        <header>
            <h1>Memory Game with <img className="poke-logo" src={img} alt="Pokemon"/></h1>
            <Scoreboard />
        </header>
    )
}

export default Header