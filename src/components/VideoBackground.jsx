import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

function VideoBackground({movieId}) {
    const [trailerKey, setTrailerKey] =  useState(null);
  

    const getMovieVideos= async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US` , API_OPTIONS);

        const json = await data.json();
      
      
          const trailers = json.results.filter(
            (video) => video.type === "Trailer"
          );

          const trailer = trailers.length ? trailers[0] : json.results[0];
          setTrailerKey(trailer.key);

    }

    useEffect(()=>{
        getMovieVideos();
    },[]);



    return ( 
        <div className="w-screen">
            {trailerKey && (
                <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&showinfo=0&rel=0`}
                title="Movie Trailer"
                allow="autoplay"
              ></iframe>
            )}
            
        </div>
     );
}

export default VideoBackground;