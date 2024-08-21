import React from "react";
import styles from "./page.module.css";
import Film from "../../ui/Film/Film";

interface CategoriesProps {
  finalData?: any[];
  jsonData?: any[];
  keywords?: string;
  isBookmarked?: boolean;
  filteredMovies?: any[];
  filteredTV?: any[];
  bookmarkedTV?: any[];
  bookmarkedMovies?: any[];
}

export default function FilmCategories({
  finalData = [],
  jsonData = [],
  keywords,
  isBookmarked = false,
  filteredMovies = [],
  filteredTV = [],
  bookmarkedTV = [],
  bookmarkedMovies = [],
}: CategoriesProps) {
  isBookmarked
    ? filteredMovies.map((element) => bookmarkedMovies.push(element)) &&
      filteredTV.map((element) => bookmarkedTV.push(element))
    : jsonData.map(
        (element) => element.category === keywords && finalData.push(element)
      );
  return (
    <section className={styles.container}>
      {isBookmarked ? (
        <div>
          <div>
            <h1 className={styles.h1}>Bookmarked Movies</h1>

            <div>
              <Film dataFilm={bookmarkedMovies} />
            </div>
          </div>

          <div>
            <h1 className={styles.h1}>Bookmarked TV Series</h1>

            <div>
              <Film dataFilm={bookmarkedTV} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className={styles.h1}>
            {keywords === "Movie" ? keywords + "s" : keywords}
          </h1>

          <div>
            <Film dataFilm={finalData} />
          </div>
        </div>
      )}
    </section>
  );
}
