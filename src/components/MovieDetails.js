import { ROMAN_NUMBERS, STAR_WARS_BG } from "../utils/constants";

const MovieDetails = ({ selectedMovie }) => {
  return (
    <div className="border-l-2 border-yellow-400 w-6/12">
      <div className="text-white flex flex-col items-center mt-4">
        {!selectedMovie ? (
          <p className="justify-center">No movie selected</p>
        ) : (
          <div className="px-5">
            <span className="text-3xl">{`Episode ${ROMAN_NUMBERS[selectedMovie?.episode_id]} - ${selectedMovie?.title}` }</span>
            <p className="my-2">{selectedMovie?.opening_crawl}</p>
            <p>Directed by: {selectedMovie?.director}</p>{" "}
          </div>
        )}
      </div>
      <img src={STAR_WARS_BG} alt="Star Wars BG" className="ml-8" />
    </div>
  );
};

export default MovieDetails;