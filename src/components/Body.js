import MovieDetails from "./MovieDetails";
import MoviesList from "./MoviesList";
import useMoviesListData from "../utils/useMoviesListData";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Main conatiner for the header, movie list and movie details
const Body = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useMoviesListData();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setSelectedMovie(null);
  };

  const movieData = useSelector((store) => store.movies.movieList);

  const handleMovieRowClick = (movieId) => {
    const movie = movieData.filter((movie) => movie.episode_id === movieId);
    setSelectedMovie(movie[0]);
  };

  const handleSearchMovie = (searctText) => {
    const searchedMovie = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searctText.toLowerCase())
    );
    if (searchedMovie.length !== 0) {
      setFilteredMovies(searchedMovie);
      setSelectedMovie(searchedMovie[0]);
    } else {
      setFilteredMovies(movieData);
    }
  };

  const handleSort = (criteria) => {
    setIsDropdownOpen(false);
    const sortedItems = [...movieData]?.sort((a, b) => {
      if (criteria === 'date') {
        return new Date(a?.release_date) - new Date(b?.release_date);
      }
      if (criteria === 'episode') {
        return a.episode_id - b.episode_id;
      }
      return 0;
    });
    setFilteredMovies(sortedItems);
  }

  useEffect(() => {
    movieData && setFilteredMovies(movieData);
  }, [movieData]);

  return (
    <div>
      <div className="w-screen bg-black flex flex-row px-8 py-2 border-t-2 border-b-2 border-yellow-400">
        <button className="my-2 px-2 bg-yellow-400 text-white rounded-lg" onClick={toggleDropdown}>
          Sort by...
        </button>
        {isDropdownOpen && (
        <div
          className="absolute left-8 top-12 z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu">
          <button
              className="block border-b-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={toggleDropdown}
            >
              Sort By
              <span className="absolute right-4">X</span>
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => handleSort('episode')}
            >
              Episode
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => handleSort('year')}
            >
              Year
            </button>
          </div>
        </div>
      )}
        <input
          className="w-11/12 py-2 px-4 mx-4 my-2 col-span-9 border border-yellow-400 rounded-md"
          placeholder="Type to search..."
          onChange={(e) => handleSearchMovie(e.target.value)}
        />
      </div>
      <div className="h-screen flex flex-row bg-black">
        {filteredMovies.length !== 0 && (
          <MoviesList
            movieData={filteredMovies}
            onMovieRowClick={handleMovieRowClick}
          />
        )}
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
    </div>
  );
};

export default Body;