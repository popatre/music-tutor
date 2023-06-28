import MelodyLab from "../components/MelodyLab/Melodylab";

export default function Melodymaker() {
    return (
        <div>
            <MelodyLab
                samples={[
                    { url: "/audio/B.wav", name: "B" },
                    { url: "/audio/A.wav", name: "A" },
                    { url: "/audio/G.wav", name: "G" },
                    { url: "/audio/F.wav", name: "F" },
                    { url: "/audio/E.wav", name: "E" },
                    { url: "/audio/D.wav", name: "D" },
                    { url: "/audio/C.wav", name: "C" },
                ]}
            />
        </div>
    );
}
