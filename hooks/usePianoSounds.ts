import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

export default function usePianoSounds() {
    const [playA] = useSound("/audio/A.mp3");
    const [playAb] = useSound("/audio/Ab.mp3");
    const [playB] = useSound("/audio/B.mp3");
    const [playBb] = useSound("/audio/Bb.mp3");
    const [playC, exposedData] = useSound("/audio/C.mp3");
    const [playD] = useSound("/audio/D.mp3");
    const [playDb] = useSound("/audio/Db.mp3");
    const [playE] = useSound("/audio/E.mp3");
    const [playEb] = useSound("/audio/Eb.mp3");
    const [playF] = useSound("/audio/F.mp3");
    const [playG] = useSound("/audio/G.mp3");
    const [playGb] = useSound("/audio/Gb.mp3");

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
        exposedData,
        playSounds,
    };
}
