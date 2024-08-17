import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import magnifyingGlass from "../../../public/assets/icon-search.svg";
import Trending from "../../ui/Trending/Trending";
import Recommend from "../../ui/Recommend/Recommend";

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

        <div className={styles.trending}>
          <Trending />
        </div>

        <div>
          <Recommend />
        </div>
      </div>
    </section>
  );
}
