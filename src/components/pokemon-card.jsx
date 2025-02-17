
function PokemonCard({id, pokeImg, onClick}) {


    return (
        <div onClick={() => onClick(id)}>
            <h1>card</h1>
        </div>
    )
}

export default PokemonCard