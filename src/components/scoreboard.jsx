
function Scoreboard({score, highestScore, setDifficulty}) {
    function onDifficultyChange(event) {
        setDifficulty(event.target.value);
    }

    return (
        <div className='scoreboard'>
            <div className="nes-select">
                <select id="default_select" onChange={(event) => onDifficultyChange(event)}>
                    <option value="" disabled selected hidden>Difficulty</option>
                    <option value="5">Easy</option>
                    <option value="10">Normal</option>
                    <option value="15">Hard</option>
                </select>
            </div>
            <p>SCORE: {score}</p>
            <p>HIGHEST SCORE: {highestScore}</p>
        </div>
    )
}

export default Scoreboard