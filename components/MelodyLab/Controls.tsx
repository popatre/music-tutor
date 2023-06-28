import React, { useState } from "react";
import styles from "./MelodyMachine.module.scss";
import * as Tone from "tone";

export default function Controls() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleStartClick = async () => {
        if (Tone.Transport.state === "started") {
            Tone.Transport.pause();
            setIsPlaying(false);
        } else {
            await Tone.start();
            Tone.Transport.start();
            setIsPlaying(true);
        }
    };

    const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        Tone.Transport.bpm.value = Number(e.target.value);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        Tone.Destination.volume.value = Tone.gainToDb(Number(e.target.value));
    };

    return (
        <div className={styles.controls}>
            <button onClick={handleStartClick} className={styles.button}>
                {isPlaying ? "Pause" : "Start"}
            </button>
            <label className={styles.fader}>
                <span>BPM</span>
                <input
                    type="range"
                    min={30}
                    max={300}
                    step={1}
                    onChange={handleBpmChange}
                    defaultValue={120}
                />
            </label>
            <label className={styles.fader}>
                <span>Volume</span>
                <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    onChange={handleVolumeChange}
                    defaultValue={1}
                />
            </label>
        </div>
    );
}
