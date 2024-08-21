import React from "react";
import Film from "../Film/Film";
import styles from "./page.module.css";

type Props = {
  params: string;
  data: any[];
};

export default function InputResult({ params, data }: Props) {
  const renderedByParams = data.filter((element) =>
    element.title.toLowerCase().includes(params)
  );

  const lengthOfRendered = renderedByParams.length;
  console.log(renderedByParams);
  return (
    <section>
      <div>
        <h1 className={styles.h1}>
          Found {lengthOfRendered} {lengthOfRendered > 1 ? "results" : "result"}{" "}
          for &apos;{params}&apos;
        </h1>

        <Film dataFilm={renderedByParams} />
      </div>
    </section>
  );
}
