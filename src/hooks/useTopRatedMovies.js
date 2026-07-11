import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();



    const fetchTopRatedMovieData = async ()=>{
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

        const data = await fetch(url , API_OPTIONS);
        const json = await data.json();
   

        dispatch(addTopRatedMovies(json.results));
    }



    useEffect(()=>{
        fetchTopRatedMovieData();
    },[]);
}


export default useTopRatedMovies