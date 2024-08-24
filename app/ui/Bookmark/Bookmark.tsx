import React, { useState } from "react";
import styles from "./page.module.css";
import bookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
import bookmarkFull from "../../../public/assets/icon-bookmark-full.svg";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  bookmarkStyle: string;
  isBookmark?: boolean;
};

export default function Bookmark({ bookmarkStyle, isBookmark }: Props) {
  const [checkBookmark, setCheckBookmark] = useState(isBookmark);
  const trendingCheck = bookmarkStyle == "trending";
  const recommendCheck = bookmarkStyle == "recommend";
  function handleClick() {
    setCheckBookmark(!checkBookmark);
    console.log("bookmark?");
  }
  // console.log(trendingCheck, recommendCheck);

  return (
    <>
      {checkBookmark ? (
        <div
          onClick={() => handleClick()}
          className={styles.bookmarkFullRecommendContainer}
        >
          <Image
            src={bookmarkFull}
            alt="Bookmarked"
            height={14}
            width={11.67}
          />
        </div>
      ) : (
        <div
          onClick={() => handleClick()}
          className={clsx({
            [styles.bookmarkEmptyTrendingContainer]: trendingCheck,
            [styles.bookmarkEmptyRecommendContainer]: recommendCheck,
          })}
        >
          <Image
            src={bookmarkEmpty}
            width={11.67}
            height={14}
            alt="book mark"
          />
        </div>
      )}
    </>
  );
}
