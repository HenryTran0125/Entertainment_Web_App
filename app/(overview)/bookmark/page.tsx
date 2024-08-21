import React from "react";
import data from "../../../data.json";
import FilmCategories from "../../ui/FilmCategories/FilmCategories";

export default function page() {
  const bookmarkedMovies: any[] = [];
  const bookmarkedTV: any[] = [];

  const filteredData = data.filter((element) => element.isBookmarked);

  const filteredMovies = filteredData.filter(
    (element) => element.category === "Movie"
  );

  const filteredTV = filteredData.filter(
    (element) => element.category === "TV Series"
  );

  return (
    <FilmCategories
      bookmarkedMovies={bookmarkedMovies}
      bookmarkedTV={bookmarkedTV}
      filteredMovies={filteredMovies}
      filteredTV={filteredTV}
      isBookmarked={true}
    />
  );
}
