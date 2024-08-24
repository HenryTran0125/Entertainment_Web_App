import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Movie from "../../../public/assets/icon-category-movie.svg";
import tv from "../../../public/assets/icon-category-tv.svg";
import Play from "../Play/Play";
import Bookmark from "../Bookmark/Bookmark";

interface DataProps {
  dataFilm: any[];
}

export default function Film({ dataFilm }: DataProps) {
  const [hover, setHover] = useState<number | null>(null);

  function onHover(index: number) {
    setHover((curr) => (curr == index ? null : index));
  }
  return (
    <ul className={styles.ul}>
      {dataFilm.map((element, index) => (
        <li
          onMouseEnter={() => onHover(index + 1)}
          onMouseLeave={() => setHover(null)}
          className={styles.li}
          key={index}
        >
          <div className={styles.div}>
            <div className={styles.span}>
              <Image
                src={`/${element.thumbnail.regular.medium}`}
                width={280}
                height={174}
                alt={element.title}
                className={styles.img}
              />
            </div>
            {hover == index + 1 ? (
              <div className={styles.span}>
                <Play />
              </div>
            ) : (
              ""
            )}
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

          {
            <Bookmark
              isBookmark={element.isBookmarked}
              bookmarkStyle="recommend"
            />
          }
        </li>
      ))}
    </ul>
  );
}
