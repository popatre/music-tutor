import React, { useState } from "react";
import GameOverScreen from "./GameOverScreen";

type Props = {
    noteImgUrls: { [key: string]: string };
};

function StaveGame({ noteImgUrls }: Props) {
    const [randomNote, setRandomNote] = useState<string>("f");
    const [score, setScore] = useState<number>(0);
    const [timer, setTimer] = useState<number>(20);
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [gameStarted, setGameStarted] = useState(false);

    const startTimer = () => {
        setGameStarted(true);
        let count = timer;
        const timerInterval = window.setInterval(() => {
            setTimer((prevTimer) => (prevTimer += -1));
            count--;
            if (count === 0) {
                clearInterval(timerInterval);
                setIsGameOver(true);
                setGameStarted(false);
            }
        }, 1000);
    };

    const pickRandomNote = () => {
        const letters = Object.keys(noteImgUrls);
        const randomNumber = Math.floor(Math.random() * letters.length);
        setRandomNote(letters[randomNumber]);
    };

    const checkAnswer = (note: string) => {
        if (note === randomNote.toLowerCase()) {
            setScore((prevScore) => (prevScore += 1));
            pickRandomNote();
        } else {
            setScore((prevScore) => (prevScore += -1));
        }
    };
    return !isGameOver ? (
        <div>
            <h2>Score: {score}</h2>
            <h2>Time Remaining:{timer}</h2>
            <img src={noteImgUrls[randomNote]} alt="Note on a stave" />
            {!gameStarted && <button onClick={startTimer}>Start Timer</button>}
            {gameStarted && (
                <div>
                    <button onClick={() => checkAnswer("a")}>A</button>
                    <button onClick={() => checkAnswer("b")}>B</button>
                    <button onClick={() => checkAnswer("c")}>C</button>
                    <button onClick={() => checkAnswer("d")}>D</button>
                    <button onClick={() => checkAnswer("e")}>E</button>
                    <button onClick={() => checkAnswer("f")}>F</button>
                    <button onClick={() => checkAnswer("g")}>G</button>
                </div>
            )}
        </div>
    ) : (
        <GameOverScreen
            score={score}
            setIsGameOver={setIsGameOver}
            setTimer={setTimer}
            setScore={setScore}
        />
    );
}

export default StaveGame;
