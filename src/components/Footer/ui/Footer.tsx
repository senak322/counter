import { creator } from "../constants/createdBy";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Created by <span className={styles.creator}>{creator}</span>
      </p>

      <span
        className={styles.link}
        onClick={() => window.open("https://github.com/senak322", "_blank")}
      >
        GitHub
      </span>
      <span
        className={styles.link}
        onClick={() => window.open("https://t.me/senak322", "_blank")}
      >
        Telegram
      </span>
    </footer>
  );
}
