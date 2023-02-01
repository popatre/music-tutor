import React from "react";

type Props = {
    score: number;
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
    setTimer: React.Dispatch<React.SetStateAction<number>>;
    setScore: React.Dispatch<React.SetStateAction<number>>;
};

function GameOverScreen({ score, setIsGameOver, setTimer, setScore }: Props) {
    const resetGame = () => {
        setIsGameOver(false);
        setTimer(20);
        setScore(0);
    };
    return (
        <div>
            <h1>Time's Up!</h1>
            <p>Your score was: {score}</p>
            <button onClick={resetGame}>Play Again?</button>
        </div>
    );
}

export default GameOverScreen;
