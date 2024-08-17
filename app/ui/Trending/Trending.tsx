import React from "react";
import styles from "./page.module.css";
import data from "../../../data.json";
import Image from "next/image";
import Movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";
import bookmark from "../../../public/assets/icon-bookmark-empty.svg";

export default function Trending() {
  const dataTrending = data.filter((item) => item.isTrending);
  console.log(dataTrending);
  return (
    <section>
      <div>
        <h1 className={styles.title}>trending</h1>

        <div>
          <ul className={styles.ul}>
            {dataTrending.map((item, index) => (
              <li className={styles.li} key={index}>
                <Image
                  src={`/${item.thumbnail.trending?.large}`}
                  height={230}
                  width={470}
                  alt={item.title}
                  className={styles.img}
                />

                <div className={styles.alignmentInformation}>
                  <ul className={styles.informationList}>
                    <li className={styles.itemList}>{item.year}</li>
                    <li className={styles.itemList}>
                      <Image
                        src={item.category == "Movie" ? Movie : tv}
                        height={12}
                        width={12}
                        alt={item.category}
                        className={styles.icon}
                      />
                      {item.category}
                    </li>

                    <li className={styles.itemList}>{item.rating}</li>
                  </ul>

                  <div className={styles.trendingTitle}>{item.title}</div>
                </div>

                <div className={styles.bookmarkEmptyContainer}>
                  <Image
                    src={bookmark}
                    width={11.67}
                    height={14}
                    alt="book mark"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
