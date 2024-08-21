import React from "react";
import data from "../../../data.json";
import FilmCategories from "../../ui/FilmCategories/FilmCategories";

export default function page() {
  const dataMovie: any[] = [];
  const categoryMovie = data.filter((element) => element.category === "Movie");
  console.log(categoryMovie, 2);
  return (
    <FilmCategories
      finalData={dataMovie}
      jsonData={categoryMovie}
      keywords={"Movie"}
    />
  );
}
