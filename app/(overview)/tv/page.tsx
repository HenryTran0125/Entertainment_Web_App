import React from "react";
import data from "../../../data.json";
import FilmCategories from "../../ui/FilmCategories/FilmCategories";

export default function page() {
  const dataTv: any[] = [];
  const categoriesTV = data.filter(
    (element) => element.category === "TV Series"
  );
  // console.log(categoriesTV);
  return (
    <FilmCategories
      finalData={dataTv}
      jsonData={categoriesTV}
      keywords={"TV Series"}
    />
  );
}
