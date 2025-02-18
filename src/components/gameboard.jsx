import PokemonCard from "./pokemon-card.jsx";
import {useState} from "react";

export default function Gameboard({itemCount = 10}) {
    const [cards, setCards] = useState(createPokeCards);
    const [clickedCards, setClickedCards] = useState([]);

    function createPokeCards() {
        const cards = [];
        for (let i = 0; i < itemCount; i++) {
            let id = Math.floor(Math.random() * 400) + 1
            while (!cards.every(card => card.props.id !== id)) {
                id = Math.floor(Math.random() * 400) + 1;
            }
            cards.push(<PokemonCard key={i} id={id} onClick={cardClicked} />)
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