"use client";

import React from "react";
import data from "../../../data.json";
import FilmCategories from "../../ui/FilmCategories/FilmCategories";
import { useSearchParams } from "next/navigation";
import InputResult from "../../ui/InputResult/InputResult";
import styles from "./page.module.css";

export default function Page() {
  const dataMovie: any[] = [];
  const params = useSearchParams();
  const keywords = params.get("search")?.toLowerCase();

  const categoryMovie = data.filter((element) => element.category === "Movie");
  return (
    <>
      {keywords ? (
        <section className={styles.section}>
          <InputResult params={keywords} data={categoryMovie} />
        </section>
      ) : (
        <FilmCategories
          finalData={dataMovie}
          jsonData={categoryMovie}
          keywords={"Movie"}
        />
      )}
    </>
  );
}
