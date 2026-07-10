import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="-mt-52 relative z-20 bg-black">
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
      />

      <MovieList
        title="Popular"
        movies={movies.nowPlayingMovies}
      />

      <MovieList
        title="Top Rated"
        movies={movies.nowRatedMovies}
      />

      <MovieList
        title="Upcoming"
        movies={movies.upcomingMovies}
      />
    </div>
  );
}

export default SecondaryContainer;