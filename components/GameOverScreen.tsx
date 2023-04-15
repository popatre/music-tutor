import React, { Dispatch } from "react";
import styles from "@/styles/Stave.module.css";

type Props = {
    score: number;
    setIsGameOver: Dispatch<React.SetStateAction<boolean>>;
    setTimer: Dispatch<React.SetStateAction<number>>;
    setScore: Dispatch<React.SetStateAction<number>>;
};

function GameOverScreen({ score, setIsGameOver, setTimer, setScore }: Props) {
    const resetGame = () => {
        setIsGameOver(false);
        setTimer(20);
        setScore(0);
    };
    return (
        <div>
            <h2 className={styles.title}>Time's Up!</h2>
            <p className={styles.finalScore}>Your score was: {score}</p>
            <button className={styles.btn} onClick={resetGame}>
                Play Again?
            </button>
        </div>
    );
}

export default GameOverScreen;
