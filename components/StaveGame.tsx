import React, { useState } from "react";

function StaveGame() {
    const [randomNote, setRandomNote] = useState("f");
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(20);

    const startTimer = () => {
        let count = timer;
        const timerInterval = window.setInterval(() => {
            setTimer((prevTimer) => (prevTimer += -1));
            count--;
            if (count === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);
    };

    const noteImgUrls: { [key: string]: string } = {
        f: "https://www.musictheoryacademy.com/wp-content/uploads/2020/06/Treble-Clef-Notes-Quiz-low-F.jpg",
        d: "https://www.musictheoryacademy.com/wp-content/uploads/2020/06/Treble-Clef-Notes-Quiz-D.jpg",
        e: "https://www.musictheoryacademy.com/wp-content/uploads/2020/06/Treble-Clef-Notes-Quiz-E.jpg",
        F: "https://www.musictheoryacademy.com/wp-content/uploads/2020/06/Treble-Clef-Notes-Quiz-F.jpg",
        g: "https://www.musictheoryacademy.com/wp-content/uploads/2020/06/Treble-Clef-Notes-Quiz-G.jpg",
    };
    const pickRandomNote = () => {
        const letters = ["f", "d", "e", "g", "F"];
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
    return (
        <div>
            <h2>Score: {score}</h2>
            <h2>Time Remaining:{timer}</h2>
            <img src={noteImgUrls[randomNote]} alt="Note on a stave" />
            <button onClick={startTimer}>Start Timer</button>
            <div>
                <button name="d" onClick={() => checkAnswer("d")}>
                    D
                </button>
                <button onClick={() => checkAnswer("e")}>E</button>
                <button onClick={() => checkAnswer("f")}>F</button>
                <button onClick={() => checkAnswer("g")}>G</button>
            </div>
        </div>
    );
}

export default StaveGame;
