import { useState } from "react"
import Compliments from "../components/reaction";


function MiniGame() {

    const [score, setScore] = useState(0)

    function Content() {
            setScore(score + 1)
        }

    return (
        <>
        <h2>Clicker</h2>
        <h1>Счет очков:</h1>
        <h1>{score}</h1>
        <button onClick={Content}>Повысить ставку</button>
        <h2>{score > 10 ? "Молодец, ты всех обогнал" : "Поднажми, у тебя получится"}</h2>
        </>
    )
}

export default MiniGame;
