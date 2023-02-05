import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const router = useRouter();

    const handleClick = (href: string): void => {
        router.push(href);
    };
    return (
        <>
            <Head>
                <title>Music Theory Teach</title>
                <meta name="description" content="Music T" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>Music Theory Challenge</h1>
                <button onClick={() => handleClick("/stave-challenge/treble")}>
                    Treble Clef Notes Quiz
                </button>
                <button onClick={() => handleClick("/stave-challenge/bass")}>
                    Bass Clef Notes Quiz
                </button>
                <button>Hello</button>
            </main>
        </>
    );
}
