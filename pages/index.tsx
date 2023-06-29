import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import MobileMessage from "@/components/MobileMessage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    const router = useRouter();

    const handleClick = (href: string): void => {
        router.push(href);
    };

    if (isTabletOrMobile) return <MobileMessage />;
    return (
        <>
            <Head>
                <title>Music Theory</title>
                <meta name="description" content="Music T" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>Music Theory </h1>
                <div className={styles.buttons}>
                    <button
                        onClick={() => handleClick("/stave-challenge/treble")}
                    >
                        Treble Clef Notes Quiz
                    </button>

                    <button
                        onClick={() => handleClick("/stave-challenge/bass")}
                    >
                        Bass Clef Notes Quiz
                    </button>
                    <button onClick={() => handleClick("/piano-player")}>
                        Piano Player
                    </button>
                    <button onClick={() => handleClick("/chords")}>
                        Piano Chord Finder
                    </button>
                    <button
                        onClick={() =>
                            handleClick("/intervals/interval-trainer")
                        }
                    >
                        Interval Trainer
                    </button>
                    <button onClick={() => handleClick("/beat-maker")}>
                        Beat Maker
                    </button>
                    <button onClick={() => handleClick("/melody-maker")}>
                        Melody Maker
                    </button>
                </div>
            </main>
        </>
    );
}
