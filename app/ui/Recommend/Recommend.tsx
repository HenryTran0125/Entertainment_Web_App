import React from "react";
import styles from "./page.module.css";
import data from "../../../data.json";
import Image from "next/image";

export default function Recommend() {
  const recommendData = data.filter((element) => !element.isTrending);
  console.log(recommendData);
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

                {/* <span className={styles.firstDot}></span> */}

                <span className={styles.category}>{element.category}</span>

                <span>{element.rating}</span>
              </div>

              <div>
                <div>{element.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
