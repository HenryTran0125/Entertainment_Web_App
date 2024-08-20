import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import BookmarkEmpty from "../BookmarkEmpty/BookmarkEmpty";
import BookmarkFull from "../BookmarkFull/BookmarkFull";
import Movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";

interface DataProps {
  dataFilm: any[];
}

export default function Film({ dataFilm }: DataProps) {
  return (
    <ul className={styles.ul}>
      {dataFilm.map((element, index) => (
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

          {element.isBookmarked ? (
            <BookmarkFull />
          ) : (
            <BookmarkEmpty bookmarkStyle="recommend" />
          )}
        </li>
      ))}
    </ul>
  );
}
