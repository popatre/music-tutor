import React, { useRef, useState, useEffect, KeyboardEvent } from "react";
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

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress, false);
        return () =>
            window.removeEventListener("keydown", handleKeyPress, false);
    }, []);

    const keyRef = useRef<HTMLDivElement>(null);

    const [keyPressed, setKeyPressed] = useState({
        C: "",
        Db: "",
        D: "",
        E: "",
        Eb: "",
        F: "",
        G: "",
        Gb: "",
        A: "",
        Ab: "",
        Bb: "",
        B: "",
    });

    const handleClick = (note: string) => {
        eval(`play${note}()`);

        setKeyPressed((prevState) => {
            return { ...prevState, [note]: styles.active };
        });
        setTimeout(() => {
            setKeyPressed((prevState) => {
                return { ...prevState, [note]: "" };
            });
        }, 200);
    };

    const handleKeyPress = ({ key }: KeyDownEvent) => {
        const note = key.toUpperCase();
        eval(`play${note}()`);
    };

    return (
        <main className={styles.container}>
            <div className={styles.piano}>
                <div
                    ref={keyRef}
                    data-note="C"
                    className={`${styles.key} ${styles.white} ${keyPressed.C}`}
                    onClick={() => handleClick("C")}
                ></div>
                <div
                    onClick={() => handleClick("Db")}
                    data-note="Db"
                    className={`${styles.key} ${styles.black} ${keyPressed.Db}`}
                ></div>
                <div
                    onClick={() => handleClick("D")}
                    data-note="D"
                    className={`${styles.key} ${styles.white} ${keyPressed.D}`}
                ></div>
                <div
                    onClick={() => handleClick("Eb")}
                    data-note="Eb"
                    className={`${styles.key} ${styles.black} ${keyPressed.Eb}`}
                ></div>
                <div
                    onClick={() => handleClick("E")}
                    data-note="E"
                    className={`${styles.key} ${styles.white} ${keyPressed.E}`}
                ></div>
                <div
                    onClick={() => handleClick("F")}
                    data-note="F"
                    className={`${styles.key} ${styles.white} ${keyPressed.F}`}
                ></div>
                <div
                    onClick={() => handleClick("Gb")}
                    data-note="Gb"
                    className={`${styles.key} ${styles.black} ${keyPressed.Gb}`}
                ></div>
                <div
                    onClick={() => handleClick("G")}
                    data-note="G"
                    className={`${styles.key} ${styles.white} ${keyPressed.G}`}
                ></div>
                <div
                    onClick={() => handleClick("Ab")}
                    data-note="Ab"
                    className={`${styles.key} ${styles.black} ${keyPressed.Ab}`}
                ></div>
                <div
                    onClick={() => handleClick("A")}
                    data-note="A"
                    className={`${styles.key} ${styles.white} ${keyPressed.A}`}
                ></div>
                <div
                    onClick={() => handleClick("Bb")}
                    data-note="Bb"
                    className={`${styles.key} ${styles.black} ${keyPressed.Bb}`}
                ></div>
                <div
                    onClick={() => handleClick("B")}
                    data-note="B"
                    className={`${styles.key} ${styles.white} ${keyPressed.B}`}
                ></div>
            </div>
        </main>
    );
}
