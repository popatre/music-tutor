import React, { useState } from "react";
import { Chord } from "tonal";
import PianoPlayer from "./piano-player";
function chords() {
    const [chordNotes, setChordNotes] = useState<string[]>([]);

    const handleClick = (chord: string) => {
        const triad = Chord.degrees(chord);
        const result = [1, 2, 3].map(triad);
        setChordNotes(result);
    };
    console.log(chordNotes);

    return (
        <div>
            chords
            <PianoPlayer chord={chordNotes} />
            <button onClick={() => handleClick("C")}>C</button>
            <button onClick={() => handleClick("Cm")}>Cm</button>
            <button onClick={() => handleClick("D")}>D</button>
            <button onClick={() => handleClick("Dm")}>Dm</button>
            <button onClick={() => handleClick("E")}>E</button>
            <button onClick={() => handleClick("Em")}>Em</button>
        </div>
    );
}

export default chords;
