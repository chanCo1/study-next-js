import { useState, useCallback, useEffect } from "react";
import Seo from "../components/Seo";

const API_KEY = "cf809e361fd06f786bc79f3cda7387e4";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();

      setMovies(results);
    })();
  }, []);

  const onClickPlus = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const onClickMinus = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <div>
      <Seo title={"Home"} />

      <h1 className="active">hello {counter}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>

      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => { 
        return (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        );
      })}
    </div>
  );
}
