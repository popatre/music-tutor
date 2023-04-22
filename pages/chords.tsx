import React, { useState } from "react";
import { Chord } from "tonal";
import styles from "../styles/Chords.module.css";
import PianoPlayer from "./piano-player";
function chords() {
    const [chordNotes, setChordNotes] = useState<string[]>([]);

    const handleClick = (chord: string) => {
        if (chord > "Em" && chord < "A") {
            const triad = Chord.degrees(chord);
            const result = [3, 1, 2].map(triad);
            setChordNotes(result);
        } else if (chord >= "A") {
            const triad = Chord.degrees(chord);
            const result = [2, 3, 1].map(triad);
            setChordNotes(result);
        } else {
            const triad = Chord.degrees(chord);
            const result = [1, 2, 3].map(triad);
            setChordNotes(result);
        }
    };

    return (
        <main>
            <PianoPlayer chord={chordNotes} />
            <div className={styles.btnBar}>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("C")}
                >
                    C
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("Cm")}
                >
                    Cm
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("D")}
                >
                    D
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("Dm")}
                >
                    Dm
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("E")}
                >
                    E
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("Em")}
                >
                    Em
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("F")}
                >
                    F
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("Fm")}
                >
                    Fm
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("G")}
                >
                    G
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("Gm")}
                >
                    Gm
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("A")}
                >
                    A
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("Am")}
                >
                    Am
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("B")}
                >
                    B
                </button>
                <button
                    className={styles.btn__answer}
                    onClick={() => handleClick("Bm")}
                >
                    Bm
                </button>
            </div>
        </main>
    );
}

export default chords;
