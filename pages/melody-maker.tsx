import MelodyLab from "../components/MelodyLab/Melodylab";
import styles from "../components/MelodyLab/MelodyMachine.module.scss";

export default function Melodymaker() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Melody Maker</h1>
            <MelodyLab
                samples={[
                    { name: "", note: "B4" },
                    { name: "", note: "A4" },
                    { name: "", note: "G4" },
                    { name: "", note: "F4" },
                    { name: "", note: "E4" },
                    { name: "", note: "D4" },
                    { name: "", note: "C4" },
                ]}
            />
        </div>
    );
}
