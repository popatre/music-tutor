import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

export default function usePianoSounds(volume: number) {
    const [playA, exposedDataA] = useSound("/audio/A.mp3", { volume });
    const [playAb, exposedDataAb] = useSound("/audio/Ab.mp3", { volume });
    const [playB, exposedDataB] = useSound("/audio/B.mp3", { volume });
    const [playBb, exposedDataBb] = useSound("/audio/Bb.mp3", { volume });
    const [playC, exposedDataC] = useSound("/audio/C.mp3", { volume });
    const [playD, exposedDataD] = useSound("/audio/D.mp3", { volume });
    const [playDb, exposedDataDb] = useSound("/audio/Db.mp3", { volume });
    const [playE, exposedDataE] = useSound("/audio/E.mp3", { volume });
    const [playEb, exposedDataEb] = useSound("/audio/Eb.mp3", { volume });
    const [playF, exposedDataF] = useSound("/audio/F.mp3", { volume });
    const [playG, exposedDataG] = useSound("/audio/G.mp3", { volume });
    const [playGb, exposedDataGb] = useSound("/audio/Gb.mp3", { volume });

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

    const playSounds = (key: string): void | false => {
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
        if (mappedKeys[key]) mappedKeys[key]();
        else return false;
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
