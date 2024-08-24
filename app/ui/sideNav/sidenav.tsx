"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.svg";
import home from "../../../public/assets/icon-nav-home.svg";
import homeActive from "../../../public/assets/icon-nav-home-active.svg";
import homeHover from "../../../public/assets/icon-nav-home-hover.svg";

import movies from "../../../public/assets/icon-nav-movies.svg";
import moviesActive from "../../../public/assets/icon-nav-movies-active.svg";
import moviesHover from "../../../public/assets/icon-nav-movies-hover.svg";

import tv from "../../../public/assets/icon-nav-tv-series.svg";
import tvActive from "../../../public/assets/icon-nav-tv-series-active.svg";
import tvHover from "../../../public/assets/icon-nav-tv-series-hover.svg";

import bookmark from "../../../public/assets/icon-nav-bookmark.svg";
import bookmarkActive from "../../../public/assets/icon-nav-bookmark-active.svg";
import bookmarkHover from "../../../public/assets/icon-nav-bookmark-hover.svg";

import avatar from "../../../public/assets/image-avatar.png";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname().substring(1);

  console.log(pathname);
  return (
    <aside className={styles.alignment}>
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
                {
                  img: home,
                  imgHover: homeHover,
                  imgActive: homeActive,
                  id: "home",
                },
                {
                  img: movies,
                  imgHover: moviesHover,
                  imgActive: moviesActive,
                  id: "movies",
                },
                { img: tv, imgHover: tvHover, imgActive: tvActive, id: "tv" },
                {
                  img: bookmark,
                  imgHover: bookmarkHover,
                  imgActive: bookmarkActive,
                  id: "bookmark",
                },
              ].map((item, index) => (
                <Link
                  className={styles.navigationElement}
                  href={`/${item.id}`}
                  key={index}
                >
                  <Image
                    src={pathname == item.id ? item.imgActive : item.img}
                    width={20}
                    height={20}
                    alt="icon"
                  />
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.avatar}>
          <Image src={avatar} width={40} height={40} alt="avatar" />
        </div>
      </div>
    </aside>
  );
}
