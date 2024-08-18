import React from "react";
import styles from "./page.module.css";
import data from "../../../data.json";
import Image from "next/image";
import Movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";
import Bookmark from "../Bookmark/Bookmark";

export default function Recommend() {
  const recommendData = data.filter((element) => !element.isTrending);
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>Recommended for you</h1>

      <div>
        <ul className={styles.ul}>
          {recommendData.map((element, index) => (
            <li className={styles.li} key={index}>
              <div>
                <Image
                  src={`/${element.thumbnail.regular.medium}`}
                  width={280}
                  height={174}
                  alt={element.title}
                  className={styles.img}
                />
              </div>

              <div className={styles.information}>
                <span className={styles.year}>{element.year}</span>

                <span className={styles.theDots}></span>

                <span className={styles.category}>
                  <Image
                    src={element.category == "Movie" ? Movie : tv}
                    width={12}
                    height={12}
                    alt={element.category == "Movie" ? "Movie" : "tv"}
                    className={styles.categoryImage}
                  />
                  {element.category}
                </span>

                <span className={styles.theDots}></span>

                <span>{element.rating}</span>
              </div>

              <div>
                <div className={styles.title}>{element.title}</div>
              </div>

              <Bookmark bookmarkStyle="recommend" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
