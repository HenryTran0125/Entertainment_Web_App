import React from "react";
import styles from "./page.module.css";
import bookmark from "../../../public/assets/icon-bookmark-empty.svg";
import Image from "next/image";
import clsx from "clsx";

interface BookmarkStyle {
  bookmarkStyle: string;
}

export default function Bookmark({ bookmarkStyle }: BookmarkStyle) {
  const trendingCheck = bookmarkStyle == "trending";
  const recommendCheck = bookmarkStyle == "recommend";
  console.log(trendingCheck, recommendCheck);

  return (
    <div
      className={clsx({
        [styles.bookmarkEmptyTrendingContainer]: trendingCheck,
        [styles.bookmarkEmptyRecommendContainer]: recommendCheck,
      })}
    >
      <Image src={bookmark} width={11.67} height={14} alt="book mark" />
    </div>
  );
}
