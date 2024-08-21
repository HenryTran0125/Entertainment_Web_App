"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Trending from "../../ui/Trending/Trending";
import Recommend from "../../ui/Recommend/Recommend";
import { useSearchParams } from "next/navigation";
import InputResult from "../../ui/InputResult/InputResult";
import data from "../../../data.json";

export default function Home() {
  const searchParams = useSearchParams();
  const params = searchParams.get("search")?.toLowerCase();
  console.log(params);

  return (
    <section className={styles.section}>
      <div className={styles.alignment}>
        {params ? (
          <div>
            <InputResult data={data} params={params} />
          </div>
        ) : (
          <div>
            <div className={styles.trending}>
              <Trending />
            </div>

            <div>
              <Recommend />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
