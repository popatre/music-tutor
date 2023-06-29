import styles from "@/styles/Mobile.module.css";

export default function MobileMessage() {
    return (
        <main className={styles.container}>
            <div className={styles.body}>
                <img
                    className={styles.img}
                    src="https://cdn-icons-png.flaticon.com/512/0/24.png"
                    alt="no mobile"
                />
                <h2 className={styles.title}>
                    Looks like you're using a tablet or mobile
                </h2>
                <p className={styles.sub}>
                    This page is best viewed on a computer
                </p>
            </div>
        </main>
    );
}
