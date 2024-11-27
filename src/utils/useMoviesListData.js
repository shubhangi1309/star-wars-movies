import { useEffect } from "react";
import { GET_MOVIES_API } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../slices/moviesSlice";

const useMoviesListData = () => {
    const dispatch = useDispatch();
    const movieData = useSelector((store) => store.movies.movieList);

    useEffect(() => {
        !movieData && fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(GET_MOVIES_API);
        const json = await data.json();
        dispatch(addMovies(json.results));
    }
    return movieData;
}

export default useMoviesListData;