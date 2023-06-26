import usePianoSounds from "@/hooks/usePianoSounds";
import { useState } from "react";
import styles from "../../styles/Intervals.module.css";

type PlayInterval = (note1: string, note2: string, answer?: string) => void;

export default function IntervalChallenge() {
    const [interval, setInterval] = useState<string[]>([]);
    const [answer, setAnswer] = useState<string>("");
    const [totalScore, setTotalScore] = useState(0);
    const [gameInProgress, setGameInProgress] = useState(false);
    const [buttonStyles, setButtonStyles] = useState({
        unison: "",
        M2: "",
        M3: "",
        P4: "",
        P5: "",
        M6: "",
        M7: "",
    });

    const { playClicks } = usePianoSounds();

    function pickIntervals() {
        setButtonStyles({
            unison: "",
            M2: "",
            M3: "",
            P4: "",
            P5: "",
            M6: "",
            M7: "",
        });
        const intervals: { [key: string]: () => void } = {
            1: () => playInterval("C", "C", "unison"),
            M2: () => playInterval("C", "D", "M2"),
            M3: () => playInterval("C", "E", "M3"),
            P4: () => playInterval("C", "F", "P4"),
            P5: () => playInterval("C", "G", "P5"),
            M6: () => playInterval("C", "A", "M6"),
            M7: () => playInterval("C", "B", "M7"),
        };
        const intervalNames = ["1", "M2", "M3", "P4", "P5", "M6", "M7"];
        const randomNumber = Math.floor(Math.random() * 7);
        const chosenInterval = intervalNames[randomNumber];
        intervals[chosenInterval]();
    }

    const playInterval: PlayInterval = (note1, note2, interval) => {
        if (interval) {
            setAnswer(interval);
        }
        setInterval([note1, note2]);
        setGameInProgress(true);
        playClicks(note1);
        setTimeout(() => {
            playClicks(note2);
        }, 1300);
    };

    function checkAnswer(answerChosen: string): boolean {
        if (answerChosen === answer) {
            setTotalScore((prevScore) => ++prevScore);
            setGameInProgress(false);
            setButtonStyles((prevState) => {
                return {
                    ...prevState,
                    [answerChosen]: "correct",
                };
            });
            return true;
        } else {
            setTotalScore((prevScore) => --prevScore);

            setButtonStyles((prevState) => {
                return {
                    ...prevState,
                    [answerChosen]: "incorrect",
                };
            });
            return false;
        }
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Interval Challenge</h1>
            <p className={styles.score}>Score: {totalScore}</p>
            <div className={styles.mid_buttons}>
                {!gameInProgress && (
                    <button
                        className={styles.startButtons}
                        onClick={() => pickIntervals()}
                    >
                        Play Interval
                    </button>
                )}
                {gameInProgress && (
                    <button
                        className={styles.startButtons}
                        onClick={() => playInterval(interval[0], interval[1])}
                    >
                        Play Interval Again?
                    </button>
                )}
            </div>
            <div className={styles.btnBar}>
                <button
                    disabled={!gameInProgress}
                    className={`${styles.btn__answer} ${
                        styles[buttonStyles.unison]
                    }`}
                    onClick={() => {
                        checkAnswer("unison");
                    }}
                >
                    Unison/Perfect 8th
                </button>
                <button
                    disabled={!gameInProgress}
                    className={`${styles.btn__answer} ${
                        styles[buttonStyles.M2]
                    }`}
                    onClick={() => checkAnswer("M2")}
                >
                    Major 2nd
                </button>
                <button
                    disabled={!gameInProgress}
                    className={`${styles.btn__answer} ${
                        styles[buttonStyles.M3]
                    }`}
                    onClick={() => checkAnswer("M3")}
                >
                    Major 3rd
                </button>
                <button
                    disabled={!gameInProgress}
                    className={`${styles.btn__answer} ${
                        styles[buttonStyles.P4]
                    }`}
                    onClick={() => checkAnswer("P4")}
                >
                    Perfect 4th
                </button>
                <button
                    disabled={!gameInProgress}
                    className={`${styles.btn__answer} ${
                        styles[buttonStyles.P5]
                    }`}
                    onClick={() => checkAnswer("P5")}
                >
                    Perfect 5th
                </button>
                <button
                    disabled={!gameInProgress}
                    className={`${styles.btn__answer} ${
                        styles[buttonStyles.M6]
                    }`}
                    onClick={() => checkAnswer("M6")}
                >
                    Major 6th
                </button>
                <button
                    disabled={!gameInProgress}
                    className={`${styles.btn__answer} ${
                        styles[buttonStyles.M7]
                    }`}
                    onClick={() => checkAnswer("M7")}
                >
                    Major 7th
                </button>
            </div>
        </main>
    );
}
