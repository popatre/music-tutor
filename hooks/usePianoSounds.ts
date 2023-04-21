import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

export default function usePianoSounds() {
    const [playA, exposedDataA] = useSound("/audio/A.wav");
    const [playAb, exposedDataAb] = useSound("/audio/Ab.wav");
    const [playB, exposedDataB] = useSound("/audio/B.wav");
    const [playBb, exposedDataBb] = useSound("/audio/Bb.wav");
    const [playC, exposedDataC] = useSound("/audio/C.wav");
    const [playD, exposedDataD] = useSound("/audio/D.wav");
    const [playDb, exposedDataDb] = useSound("/audio/Db.wav");
    const [playE, exposedDataE] = useSound("/audio/E.wav");
    const [playEb, exposedDataEb] = useSound("/audio/Eb.wav");
    const [playF, exposedDataF] = useSound("/audio/F.wav");
    const [playG, exposedDataG] = useSound("/audio/G.wav");
    const [playGb, exposedDataGb] = useSound("/audio/Gb.wav");

    const keyMap: { [key: string]: string } = {
        a: "C",
        s: "D",
        d: "E",
        f: "F",
        g: "G",
        h: "A",
        j: "B",
        w: "Db",
        e: "Eb",
        t: "Gb",
        y: "Ab",
        u: "Bb",
    };

    const playSounds = (key: string): boolean => {
        const mappedKeys: { [key: string]: PlayFunction } = {
            a: () => playC(),
            s: () => playD(),
            d: () => playE(),
            f: () => playF(),
            g: () => playG(),
            h: () => playA(),
            j: () => playB(),
            w: () => playDb(),
            e: () => playEb(),
            t: () => playGb(),
            y: () => playAb(),
            u: () => playBb(),
        };
        if (mappedKeys[key]) {
            mappedKeys[key]();
            return true;
        } else return false;
    };

    const playClicks = (key: string): void | false => {
        const mappedKeys: { [key: string]: PlayFunction } = {
            C: () => playC(),
            D: () => playD(),
            E: () => playE(),
            F: () => playF(),
            G: () => playG(),
            A: () => playA(),
            B: () => playB(),
            Db: () => playDb(),
            Eb: () => playEb(),
            Gb: () => playGb(),
            Ab: () => playAb(),
            Bb: () => playBb(),
        };
        if (mappedKeys[key]) mappedKeys[key]();
        else return false;
    };

    return {
        exposedDataC,
        exposedDataGb,
        exposedDataA,
        exposedDataAb,
        exposedDataB,
        exposedDataBb,
        exposedDataD,
        exposedDataDb,
        exposedDataE,
        exposedDataEb,
        exposedDataF,
        exposedDataG,
        playSounds,
        keyMap,
        playClicks,
    };
}
