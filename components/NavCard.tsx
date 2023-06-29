import styles from "../styles/Home.module.css";

type Props = {
    onClick: (url: string) => void;
    url: string;
    title: string;
};

export default function NavCard({ onClick, url, title }: Props) {
    return (
        <div className={styles.buttons__card}>
            <button className={styles.button} onClick={() => onClick(url)}>
                {title}
            </button>
        </div>
    );
}
