import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import magnifyingGlass from "../../../public/assets/icon-search.svg";

export default function page() {
  return (
    <section className={styles.section}>
      <div className={styles.alignment}>
        <div className={styles.inputContainer}>
          <Image
            className={styles.img}
            src={magnifyingGlass}
            height={32}
            width={32}
            alt="icon search"
          />

          <input
            className={styles.input}
            placeholder="Search for movies or TV series"
          />
        </div>

        <div></div>

        <div></div>
      </div>
    </section>
  );
}
