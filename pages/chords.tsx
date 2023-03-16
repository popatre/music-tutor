import React, { useState } from "react";
import { Chord } from "tonal";
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
            <button onClick={() => handleClick("F")}>F</button>
            <button onClick={() => handleClick("Fm")}>Fm</button>
            <button onClick={() => handleClick("G")}>G</button>
            <button onClick={() => handleClick("Gm")}>Gm</button>
            <button onClick={() => handleClick("A")}>A</button>
            <button onClick={() => handleClick("Am")}>Am</button>
            <button onClick={() => handleClick("B")}>B</button>
            <button onClick={() => handleClick("Bm")}>Bm</button>
        </div>
    );
}

export default chords;
