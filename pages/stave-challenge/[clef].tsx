import React from "react";
import styles from "@/styles/Stave.module.css";
import StaveGame from "@/components/StaveGame";
import { useRouter } from "next/router";
import { bassClefNotes, noteImgUrls } from "@/utils/staveData";

function staveChallenge() {
    const router = useRouter();
    const { clef } = router.query;
    return (
        <div className={styles.main}>
            <h1>{clef} clef - Notes on a Stave</h1>
            {clef === "treble" && <StaveGame noteImgUrls={noteImgUrls} />}
            {clef === "bass" && <StaveGame noteImgUrls={bassClefNotes} />}
        </div>
    );
}

export default staveChallenge;
