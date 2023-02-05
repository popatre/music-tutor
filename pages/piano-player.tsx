import React from "react";
import styles from "@/styles/Piano.module.css";
import useSound from "use-sound";

// import A from "/audio/A.mp3";

export default function PianoPlayer() {
    const [playA] = useSound("/audio/A.mp3");
    const [playAb] = useSound("/audio/Ab.mp3");
    const [playB] = useSound("/audio/B.mp3");
    const [playBb] = useSound("/audio/Bb.mp3");
    const [playC] = useSound("/audio/C.mp3");
    const [playD] = useSound("/audio/D.mp3");
    const [playDb] = useSound("/audio/Db.mp3");
    const [playE] = useSound("/audio/E.mp3");
    const [playEb] = useSound("/audio/Eb.mp3");
    const [playF] = useSound("/audio/F.mp3");
    const [playG] = useSound("/audio/G.mp3");
    const [playGb] = useSound("/audio/Gb.mp3");

    const handleClick = (note: string) => {
        eval(`play${note}()`);
    };

    return (
        <main className={styles.container}>
            <div className={styles.piano}>
                <div
                    data-note="C"
                    className={`${styles.key} ${styles.white}`}
                    onClick={() => handleClick("C")}
                ></div>
                <div
                    onClick={() => handleClick("Db")}
                    data-note="Db"
                    className={`${styles.key} ${styles.black}`}
                ></div>
                <div
                    onClick={() => handleClick("D")}
                    data-note="D"
                    className={`${styles.key} ${styles.white}`}
                ></div>
                <div
                    onClick={() => handleClick("Eb")}
                    data-note="Eb"
                    className={`${styles.key} ${styles.black}`}
                ></div>
                <div
                    onClick={() => handleClick("E")}
                    data-note="E"
                    className={`${styles.key} ${styles.white}`}
                ></div>
                <div
                    onClick={() => handleClick("F")}
                    data-note="F"
                    className={`${styles.key} ${styles.white}`}
                ></div>
                <div
                    onClick={() => handleClick("Gb")}
                    data-note="Gb"
                    className={`${styles.key} ${styles.black}`}
                ></div>
                <div
                    onClick={() => handleClick("G")}
                    data-note="G"
                    className={`${styles.key} ${styles.white}`}
                ></div>
                <div
                    onClick={() => handleClick("Ab")}
                    data-note="Ab"
                    className={`${styles.key} ${styles.black}`}
                ></div>
                <div
                    onClick={() => handleClick("A")}
                    data-note="A"
                    className={`${styles.key} ${styles.white}`}
                ></div>
                <div
                    onClick={() => handleClick("Bb")}
                    data-note="Bb"
                    className={`${styles.key} ${styles.black}`}
                ></div>
                <div
                    onClick={() => handleClick("B")}
                    data-note="B"
                    className={`${styles.key} ${styles.white}`}
                ></div>
            </div>
            {/* <audio id="C" src="../audio/C.mp3"></audio>
            <audio id="Db" src="../audio/Db.mp3"></audio>
            <audio id="D" src="../audio/D.mp3"></audio>
            <audio id="Eb" src="../audio/Eb.mp3"></audio>
            <audio id="E" src="../audio/E.mp3"></audio>
            <audio id="F" src="../audio/F.mp3"></audio>
            <audio id="Gb" src="../audio/Gb.mp3"></audio>
            <audio id="G" src="../audio/G.mp3"></audio>
            <audio id="Ab" src="../audio/Ab.mp3"></audio>
            <audio id="A" src="../audio/A.mp3"></audio>
            <audio id="Bb" src="../audio/Bb.mp3"></audio>
            <audio id="B" src="../audio/B.mp3"></audio> */}
        </main>
    );
}
