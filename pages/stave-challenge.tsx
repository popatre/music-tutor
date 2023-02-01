import React from "react";
import styles from "@/styles/Stave.module.css";
import StaveGame from "@/components/StaveGame";
function staveChallenge() {
    return (
        <div className={styles.main}>
            <h1>Notes on a Stave</h1>
            <StaveGame />
        </div>
    );
}

export default staveChallenge;
