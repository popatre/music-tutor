import React, { useState } from "react";
import GameOverScreen from "./GameOverScreen";
import styles from "@/styles/Stave.module.css";

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
            <h2 className={styles.score}>Score: {score}</h2>
            <h2 className={styles.score}>Time Remaining: {timer}</h2>
            <img
                className={styles.stave__img}
                src={noteImgUrls[randomNote]}
                alt="Note on a stave"
            />
            {!gameStarted && (
                <button className={styles.btn} onClick={startTimer}>
                    Start Game
                </button>
            )}
            {gameStarted && (
                <div>
                    <button
                        className={styles.btn__answer}
                        onClick={() => checkAnswer("a")}
                    >
                        A
                    </button>
                    <button
                        className={styles.btn__answer}
                        onClick={() => checkAnswer("b")}
                    >
                        B
                    </button>
                    <button
                        className={styles.btn__answer}
                        onClick={() => checkAnswer("c")}
                    >
                        C
                    </button>
                    <button
                        className={styles.btn__answer}
                        onClick={() => checkAnswer("d")}
                    >
                        D
                    </button>
                    <button
                        className={styles.btn__answer}
                        onClick={() => checkAnswer("e")}
                    >
                        E
                    </button>
                    <button
                        className={styles.btn__answer}
                        onClick={() => checkAnswer("f")}
                    >
                        F
                    </button>
                    <button
                        className={styles.btn__answer}
                        onClick={() => checkAnswer("g")}
                    >
                        G
                    </button>
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
