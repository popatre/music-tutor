import MelodyLab from "../components/MelodyLab/Melodylab";
import styles from "../components/MelodyLab/MelodyMachine.module.scss";

export default function Melodymaker() {
    return (
        <div className={styles.container}>
            <h1>Melody Maker</h1>
            <MelodyLab
                samples={[
                    { url: "/audio/B.wav", name: "" },
                    { url: "/audio/A.wav", name: "" },
                    { url: "/audio/G.wav", name: "" },
                    { url: "/audio/F.wav", name: "" },
                    { url: "/audio/E.wav", name: "" },
                    { url: "/audio/D.wav", name: "" },
                    { url: "/audio/C.wav", name: "" },
                ]}
            />
        </div>
    );
}
