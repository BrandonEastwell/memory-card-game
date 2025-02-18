
function Scoreboard({score, highestScore, cardCount, setCardCount}) {
    function onDifficultyChange(event) {
        setCardCount(event.target.value);
    }

    return (
        <div className='scoreboard'>
            <div className="nes-select">
                <select id="default_select" defaultValue={cardCount} onChange={(event) => onDifficultyChange(event)}>
                    <option value="5">Easy</option>
                    <option value="10">Normal</option>
                    <option value="15">Hard</option>
                </select>
            </div>
            <p>SCORE: {score.score} / {score.scoreLimit} </p>
            <p>HIGHEST SCORE: {highestScore}</p>
        </div>
    )
}

export default Scoreboard