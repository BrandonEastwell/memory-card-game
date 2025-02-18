import PokemonCard from "./pokemon-card.jsx";
import {useCallback, useEffect, useState} from "react";

export default function Gameboard({itemCount, setScore, setShowGame}) {
    const [cards, setCards] = useState(createPokeCards);
    const [clickedCards, setClickedCards] = useState([]);

    function createPokeCards() {
        const cards = [];
        for (let i = 0; i < itemCount; i++) {
            let id = Math.floor(Math.random() * 400) + 1
            while (!cards.every(card => card.id !== id)) {
                id = Math.floor(Math.random() * 400) + 1;
            }
            cards.push({ id });
        }
        return cards;
    }

    function gameOver() {
        console.log("Game Over!");
        setScore(0);
        setClickedCards([]);
        setShowGame(false);
    }

    const handleCardClick = useCallback((id) => {
        console.log("Clicked cards:", clickedCards);
        if (clickedCards.includes(id)) {
            gameOver();
        } else {
            setClickedCards(prevState => [...prevState, id]);
            setScore(prevScore => prevScore + 1);
        }
    }, [clickedCards, setScore]);

    useEffect(() => {
        setCards(prevData => shuffleCards([...prevData]));
    }, [clickedCards]);

    useEffect(() => {
        setCards(createPokeCards);
        setScore(0);
    }, [itemCount]);

    return (
        <div className='gameboard'>
            {cards.map(card => (
                <PokemonCard
                    key={card.id}
                    id={card.id}
                    onClick={handleCardClick}
                />
            ))}
        </div>
    )
}


function shuffleCards(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}