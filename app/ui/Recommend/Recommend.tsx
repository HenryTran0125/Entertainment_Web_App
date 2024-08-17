import React from "react";
import styles from "./page.module.css";
import data from "../../../data.json";

export default function Recommend() {
  const recommendData = data.filter((element) => !element.isTrending);
  console.log(recommendData);
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Recommended for you</h1>

      <div>
        <ul>
          {recommendData.map((element, index) => (
            <li key={index}>{element.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
