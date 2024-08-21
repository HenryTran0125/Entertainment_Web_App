"use client";

import React from "react";
import data from "../../../data.json";
import FilmCategories from "../../ui/FilmCategories/FilmCategories";
import { useSearchParams } from "next/navigation";
import InputResult from "../../ui/InputResult/InputResult";
import styles from "./page.module.css";

export default function Page() {
  const dataTv: any[] = [];
  const params = useSearchParams();
  const keywords = params.get("search")?.toLowerCase();

  const categoriesTV = data.filter(
    (element) => element.category === "TV Series"
  );
  // console.log(categoriesTV);
  return (
    <>
      {keywords ? (
        <section className={styles.section}>
          <InputResult params={keywords} data={categoriesTV} />
        </section>
      ) : (
        <FilmCategories
          finalData={dataTv}
          jsonData={categoriesTV}
          keywords={"TV Series"}
        />
      )}
    </>
  );
}
