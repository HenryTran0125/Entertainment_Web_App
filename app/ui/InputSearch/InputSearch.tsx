"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import magnifyingGlass from "../../../public/assets/icon-search.svg";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function InputSearch() {
  // const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const newParams = useParams();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams();

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className={styles.inputContainer}>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={magnifyingGlass}
          height={24}
          width={24}
          alt="icon search"
        />

        <input
          className={styles.input}
          placeholder="Search for movies or TV series"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
