import PokemonCard from "./pokemon-card.jsx";
import {useState} from "react";

export default function Gameboard({itemCount = 10}) {
    const [cards, setCards] = useState(createPokeCards);
    const [clickedCards, setClickedCards] = useState([]);

    console.log(clickedCards);

    function createPokeCards() {
        const cards = [];
        for (let i = 0; i < itemCount; i++) {
            cards.push(<PokemonCard key={i} id={i} onClick={cardClicked} />)
        }
        return cards;
    }

    function cardClicked(id) {
        setClickedCards((prevState) => {
            if (prevState.includes(id)) {
                console.log("Game Over! Restarting...");
                return [];
            } else {
                return [...prevState, id];
            }
        })
    }

    return (
        <div className='gameboard'>
            {cards}
        </div>
    )
}