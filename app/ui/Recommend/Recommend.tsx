import React from "react";
import styles from "./page.module.css";
import data from "../../../data.json";
import Film from "../Film/Film";

export default function Recommend() {
  const recommendData = data.filter((element) => !element.isTrending);
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Recommended for you</h1>

      <div>
        <Film dataFilm={recommendData} />
      </div>
    </section>
  );
}
