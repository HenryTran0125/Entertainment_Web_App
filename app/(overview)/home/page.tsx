import React from "react";
import styles from "./page.module.css";
import Trending from "../../ui/Trending/Trending";
import Recommend from "../../ui/Recommend/Recommend";
import InputSearch from "../../ui/InputSearch/InputSearch";

export default function page() {
  return (
    <section className={styles.section}>
      <div className={styles.alignment}>
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
