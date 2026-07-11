import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";




const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();

    const fetchUpcomingMoviesData = async ()=>{

        const url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
       const data = await fetch(url , API_OPTIONS);

       const json = await data.json();

       console.log(json.results);
       dispatch(addUpcomingMovies(json.results));

    }

    useEffect(()=>{
        fetchUpcomingMoviesData();
    }, []);
    
}


export default useUpcomingMovies;