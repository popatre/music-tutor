import React from "react";
import Beatbox from "../components/DrumMachine/Beatbox";
export default function beatbox() {
    return (
        <div>
            Drum Machine
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
