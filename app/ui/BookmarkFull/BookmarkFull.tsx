import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Bookmarked from "../../../public/assets/icon-bookmark-full.svg";

export default function BookmarkFull() {
  return (
    <div className={styles.bookmarkFullRecommendContainer}>
      <Image src={Bookmarked} alt="Bookmarked" height={14} width={11.67} />
    </div>
  );
}
