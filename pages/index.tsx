import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/router";
import MobileMessage from "@/components/MobileMessage";
import NavCard from "@/components/NavCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const navLinks = [
        {
            title: "Treble Clef Quiz",
            url: "/stave-challenge/treble",
            class: "treble",
        },
        {
            title: "Bass Clef Quiz",
            url: "/stave-challenge/bass",
            class: "bass",
        },
        { title: "Piano Player", url: "/piano-player", class: "piano" },
        { title: "Chord Finder", url: "/chords", class: "chords" },
        {
            title: "Interval Trainer",
            url: "/intervals/interval-trainer",
            class: "interval",
        },
        { title: "Melody Maker", url: "/melody-maker", class: "melody" },
        { title: "Beat Maker", url: "/beat-maker", class: "beat" },
    ];

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
            <main className={styles.container}>
                <h1 className={styles.title}>Music Lab </h1>
                <div className={styles.buttons__grid}>
                    {navLinks.map((page) => {
                        return (
                            <NavCard
                                title={page.title}
                                url={page.url}
                                onClick={handleClick}
                                cssClass={page.class}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
}
