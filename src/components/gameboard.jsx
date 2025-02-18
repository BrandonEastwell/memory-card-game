import PokemonCard from "./pokemon-card.jsx";
import {useCallback, useEffect, useState} from "react";

export default function Gameboard({cardCount, incrementScore, gameStates}) {
    const [cards, setCards] = useState(createPokeCards);
    const [clickedCards, setClickedCards] = useState([]);

    function createPokeCards() {
        const cards = [];
        for (let i = 0; i < cardCount; i++) {
            let id = Math.floor(Math.random() * 400) + 1
            while (!cards.every(card => card.id !== id)) {
                id = Math.floor(Math.random() * 400) + 1;
            }
            cards.push({ id });
        }
        return cards;
    }

    function gameLost() {
        setClickedCards([]);
        gameStates.setShowGame(false);
        gameStates.setGameLost(true);
    }

    function gameWon() {
        setClickedCards([]);
        gameStates.setGameWon(true);
        gameStates.setShowGame(false);
        setCards(createPokeCards);
    }

    const handleCardClick = useCallback((id) => {
        if (clickedCards.includes(id)) {
            gameLost();
        } else {
            setClickedCards(prevState => [...prevState, id]);
            incrementScore();
        }
    }, [clickedCards, incrementScore]);

    useEffect(() => {
        console.log("Clicked cards:", clickedCards);
        if (clickedCards.length === cards.length && cards.length > 0) {
            gameWon();
        } else {
            setCards(prevData => shuffleCards([...prevData]));
        }
    }, [clickedCards]);

    useEffect(() => {
        setCards(createPokeCards);
        setClickedCards([]);
    }, [cardCount]);

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