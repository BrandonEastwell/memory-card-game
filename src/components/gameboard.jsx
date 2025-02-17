import PokemonCard from "./pokemon-card.jsx";
import {useState} from "react";

export default function Gameboard({itemCount = 10}) {
    const [cards, setCards] = useState(createPokeCards);

    function createPokeCards() {
        const cards = [];
        for (let i = 0; i < itemCount; i++) {
            cards.push(<PokemonCard key={i} />)
        }
        return cards;
    }

    return (
        <div className='gameboard'>
            {cards}
        </div>
    )
}