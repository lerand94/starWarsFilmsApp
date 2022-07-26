import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  async function fetchData() {
    const response = await fetch("https://swapi.py4e.com/api/films/");
    const data = await response.json();

    const tranformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_date,
      };
    });
    setMovies(tranformedMovies);
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchData}>Fetch Movies</button>
      </section>
      {movies.length > 0 ? (
        <section>
          <MoviesList movies={movies} />
        </section>
      ) : null}
    </React.Fragment>
  );
}

export default App;
