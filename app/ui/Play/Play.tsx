import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import play from "../../../public/assets/icon-play.svg";

type Props = {};

export default function Play({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.play}>
        <Image
          className={styles.img}
          src={play}
          width={30}
          height={30}
          alt="play"
        />
        <span className={styles.text}>Play</span>
      </div>
    </div>
  );
}
