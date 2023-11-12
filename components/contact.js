import styles from "./contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.boardStyles}>
      <div className={styles.contactContainer}>
        <div className={styles.contactContent}>
          <h2>Contact us today</h2>
          <div className={styles.spacerXS} />
          <p>Get in touch to remagine your home</p>
          <div className={styles.spacerXS} />
          <Link href="/contact" className={styles.workLink}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
