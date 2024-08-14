import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import home from "../../../public/assets/icon-nav-home.svg";
import movies from "../../../public/assets/icon-nav-movies.svg";
import tv from "../../../public/assets/icon-nav-tv-series.svg";
import bookmark from "../../../public/assets/icon-nav-bookmark.svg";
import avatar from "../../../public/assets/image-avatar.png";

export default function SideNav() {
  return (
    <nav className={styles.alignment}>
      <div className={styles.container}>
        <div className={styles.navigationContainer}>
          <div className={styles.logo}>
            <Link href="#">
              <Image src={logo} width={32} height={25.6} alt="logo" />
            </Link>
          </div>

          <div>
            <ul className={styles.ul}>
              {[
                { img: home, id: "home" },
                { img: movies, id: "movies" },
                { img: tv, id: "tv" },
                { img: bookmark, id: "bookmark" },
              ].map((item, index) => (
                <Link
                  className={styles.navigationElement}
                  href={`/${item.id}`}
                  key={index}
                >
                  <Image src={item.img} width={20} height={20} alt="icon" />
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.avatar}>
          <Image src={avatar} width={40} height={40} alt="avatar" />
        </div>
      </div>
    </nav>
  );
}
