import styles from "../styles/Home.module.css";

type Props = {
    onClick: (url: string) => void;
    url: string;
    title: string;
    cssClass: string;
};

export default function NavCard({ onClick, url, title, cssClass }: Props) {
    return (
        <div className={`${styles.buttons__card} ${styles[cssClass]}`}>
            <button className={styles.button} onClick={() => onClick(url)}>
                {title}
            </button>
        </div>
    );
}
