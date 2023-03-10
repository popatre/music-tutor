import React, { useState, useEffect } from "react";
import styles from "@/styles/Piano.module.css";
import usePianoSounds from "@/hooks/usePianoSounds";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export default function PianoPlayer() {
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

    const [showHelp, setShowHelp] = useState<string>("");

    const {
        exposedDataC,
        exposedDataGb,
        exposedDataA,
        exposedDataAb,
        exposedDataB,
        exposedDataBb,
        exposedDataD,
        exposedDataDb,
        exposedDataE,
        exposedDataEb,
        exposedDataF,
        exposedDataG,
        playSounds,
        keyMap,
        playClicks,
    } = usePianoSounds();

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown, false);
        window.addEventListener("keyup", handleKeyUp, false);
        return () => {
            window.removeEventListener("keydown", handleKeyDown, false);
            window.removeEventListener("keyup", handleKeyUp, false);
        };
    }, [
        exposedDataC.sound,
        exposedDataGb.sound,
        exposedDataA.sound,
        exposedDataAb.sound,
        exposedDataB.sound,
        exposedDataBb.sound,
        exposedDataD.sound,
        exposedDataDb.sound,
        exposedDataE.sound,
        exposedDataEb.sound,
        exposedDataF.sound,
        exposedDataG.sound,
    ]);

    const handleClick = (note: string) => {
        playClicks(note);
        setKeyPressed((prevState) => {
            return { ...prevState, [note]: styles.active };
        });
        setTimeout(() => {
            setKeyPressed((prevState) => {
                return { ...prevState, [note]: "" };
            });
        }, 200);
    };

    const handleKeyDown = ({ key, repeat }: KeyDownEvent) => {
        const note = keyMap[key];
        setKeyPressed((prevState) => {
            return { ...prevState, [note]: styles.active };
        });
        if (repeat) return;
        playSounds(key);
    };

    const handleKeyUp = ({ key }: KeyDownEvent) => {
        const note = keyMap[key];
        if (note) {
            setKeyPressed((prevState) => {
                return { ...prevState, [note]: "" };
            });
            eval(`exposedData${note}`).stop();
        }
    };

    const handleHelp = () => {
        if (!showHelp) {
            setShowHelp(styles.help);
        } else {
            setShowHelp("");
        }
    };

    return (
        <main className={styles.container}>
            <button onClick={handleHelp}>
                {!showHelp ? "Show keys" : "Hide keys"}
            </button>
            <div className={styles.piano__container}>
                <div className={styles.piano}>
                    <div
                        data-note="C"
                        className={`${styles.key} ${styles.white} ${keyPressed.C}`}
                        onClick={() => handleClick("C")}
                    >
                        <p className={`${styles.whiteLetters} ${showHelp} `}>
                            a
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("Db")}
                        data-note="Db"
                        className={`${styles.key} ${styles.black} ${keyPressed.Db}`}
                    >
                        <p className={`${styles.blackLetters} ${showHelp} `}>
                            w
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("D")}
                        data-note="D"
                        className={`${styles.key} ${styles.white} ${keyPressed.D}`}
                    >
                        <p className={`${styles.whiteLetters} ${showHelp} `}>
                            s
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("Eb")}
                        data-note="Eb"
                        className={`${styles.key} ${styles.black} ${keyPressed.Eb}`}
                    >
                        <p className={`${styles.blackLetters} ${showHelp} `}>
                            e
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("E")}
                        data-note="E"
                        className={`${styles.key} ${styles.white} ${keyPressed.E}`}
                    >
                        <p className={`${styles.whiteLetters} ${showHelp} `}>
                            d
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("F")}
                        data-note="F"
                        className={`${styles.key} ${styles.white} ${keyPressed.F}`}
                    >
                        <p className={`${styles.whiteLetters} ${showHelp} `}>
                            f
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("Gb")}
                        data-note="Gb"
                        className={`${styles.key} ${styles.black} ${keyPressed.Gb}`}
                    >
                        <p className={`${styles.blackLetters} ${showHelp} `}>
                            t
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("G")}
                        data-note="G"
                        className={`${styles.key} ${styles.white} ${keyPressed.G}`}
                    >
                        <p className={`${styles.whiteLetters} ${showHelp} `}>
                            g
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("Ab")}
                        data-note="Ab"
                        className={`${styles.key} ${styles.black} ${keyPressed.Ab}`}
                    >
                        <p className={`${styles.blackLetters} ${showHelp} `}>
                            y
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("A")}
                        data-note="A"
                        className={`${styles.key} ${styles.white} ${keyPressed.A}`}
                    >
                        <p className={`${styles.whiteLetters} ${showHelp} `}>
                            h
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("Bb")}
                        data-note="Bb"
                        className={`${styles.key} ${styles.black} ${keyPressed.Bb}`}
                    >
                        <p className={`${styles.blackLetters} ${showHelp} `}>
                            u
                        </p>
                    </div>
                    <div
                        onClick={() => handleClick("B")}
                        data-note="B"
                        className={`${styles.key} ${styles.white} ${keyPressed.B}`}
                    >
                        <p className={`${styles.whiteLetters} ${showHelp}`}>
                            j
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
