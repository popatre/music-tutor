import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

export default function usePianoSounds() {
    const [playA, exposedDataA] = useSound("/audio/A.mp3");
    const [playAb, exposedDataAb] = useSound("/audio/Ab.mp3");
    const [playB, exposedDataB] = useSound("/audio/B.mp3");
    const [playBb, exposedDataBb] = useSound("/audio/Bb.mp3");
    const [playC, exposedDataC] = useSound("/audio/C.mp3");
    const [playD, exposedDataD] = useSound("/audio/D.mp3");
    const [playDb, exposedDataDb] = useSound("/audio/Db.mp3");
    const [playE, exposedDataE] = useSound("/audio/E.mp3");
    const [playEb, exposedDataEb] = useSound("/audio/Eb.mp3");
    const [playF, exposedDataF] = useSound("/audio/F.mp3");
    const [playG, exposedDataG] = useSound("/audio/G.mp3");
    const [playGb, exposedDataGb] = useSound("/audio/Gb.mp3");

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

    return {
        playA,
        playAb,
        playB,
        playBb,
        playC,
        playD,
        playDb,
        playE,
        playEb,
        playF,
        playG,
        playGb,
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
    };
}
