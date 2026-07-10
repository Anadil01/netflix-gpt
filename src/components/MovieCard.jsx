import { IMG_CDN } from "../utils/constants";

function MovieCard({ posterPath }) {
  if (!posterPath) return null;

  return (
    <div className="w-40 pr-4 flex-shrink-0">
      <img
        className="rounded-lg hover:scale-105 duration-300 cursor-pointer"
        src={IMG_CDN + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
}

export default MovieCard;