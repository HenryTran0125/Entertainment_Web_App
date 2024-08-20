import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import magnifyingGlass from "../../../public/assets/icon-search.svg";

export default function InputSearch() {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={magnifyingGlass}
          height={24}
          width={24}
          alt="icon search"
        />

        <input
          className={styles.input}
          placeholder="Search for movies or TV series"
        />
      </div>
    </div>
  );
}
