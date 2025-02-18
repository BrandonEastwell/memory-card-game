import {useEffect, useState} from "react";

function PokemonCard({id, onClick}) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                if (!res.ok) throw new Error('Pokemon not found')
                const data = await res.json();
                setData(data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchPokemon();
    }, []);

    if (!data) return (
        <div className="poke-card">
            <p>loading...</p>
        </div>
    )

    return (
        <div className="poke-card" onClick={() => onClick(id)}>
            <img className="card-image" src={data.sprites.front_default} alt={data.name}/>
            <p>{data.name}</p>
        </div>
    )
}

export default PokemonCard