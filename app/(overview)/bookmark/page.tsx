"use client";

import React from "react";
import data from "../../../data.json";
import FilmCategories from "../../ui/FilmCategories/FilmCategories";
import { useSearchParams } from "next/navigation";
import InputResult from "../../ui/InputResult/InputResult";
import styles from "./page.module.css";

export default function Page() {
  const bookmarkedMovies: any[] = [];
  const bookmarkedTV: any[] = [];

  const params = useSearchParams();
  const keywords = params.get("search")?.toLowerCase();

  const filteredData = data.filter((element) => element.isBookmarked);

  const filteredMovies = filteredData.filter(
    (element) => element.category === "Movie"
  );

  const filteredTV = filteredData.filter(
    (element) => element.category === "TV Series"
  );

  return (
    <>
      {keywords ? (
        <section className={styles.section}>
          <InputResult data={filteredData} params={keywords} />
        </section>
      ) : (
        <FilmCategories
          bookmarkedMovies={bookmarkedMovies}
          bookmarkedTV={bookmarkedTV}
          filteredMovies={filteredMovies}
          filteredTV={filteredTV}
          isBookmarked={true}
        />
      )}
    </>
  );
}
