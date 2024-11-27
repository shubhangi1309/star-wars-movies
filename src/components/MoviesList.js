import { ROMAN_NUMBERS } from "../utils/constants";

const MoviesList = ({movieData, onMovieRowClick}) => {

  return (
    <div className="w-6/12 h-5/6 text-white">
      <table className="table-auto w-full">
        <tbody>
          {movieData?.map((movie) => (
            <tr key={movie.episode_id} onClick={() => onMovieRowClick(movie.episode_id)} className="cursor-pointer">
              <td className="ml-2 pl-5 py-4 border-b-2 border-yellow-400 text-sm">EPISODE {movie.episode_id}</td>
              <td className="border-b-2 border-yellow-400">{`EPISODE ${ROMAN_NUMBERS[movie.episode_id]} ${movie.title}`}</td>
              <td className="text-right pr-3 border-b-2 border-yellow-400">{movie.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;