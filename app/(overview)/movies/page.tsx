import React from "react";
import styles from "./page.module.css";

export default function page() {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.h1}>Movies</h1>

        <div>
          <ul></ul>
        </div>
      </div>
    </section>
  );
}
