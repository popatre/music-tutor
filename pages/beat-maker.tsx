import React from "react";
import Beatbox from "../components/DrumMachine/Beatbox";
import styles from "../styles/Beatmaker.module.css";

export default function beatbox() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Beat Maker</h1>
            <Beatbox
                samples={[
                    { url: "/audio/hat-closed.wav", name: "Hi hat" },
                    { url: "/audio/clap.wav", name: "Clap" },
                    { url: "/audio/snare.wav", name: "Snare Drum" },
                    { url: "/audio/kick.wav", name: "Bass Drum" },
                ]}
            />
        </div>
    );
}
