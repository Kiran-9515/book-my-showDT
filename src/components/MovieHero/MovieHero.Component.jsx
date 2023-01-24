import React from 'react'
import { useContext } from 'react';
import {MovieContext} from "../../context/Movie.context";


const MovieHero= () => {

    const {movie} = useContext(MovieContext);

    const genres = movie.genres?.map(({name})=>name).join(", ");

  return (
   <>
   <div>

        <div className="md:hidden w-full">
            <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="cover poster"
            className="m-4 rounded w-64 h-96"
            style={{width: "calc(100%-2rem)"}}
            />
        </div>
        <div className="flex flex-col gap-3 md:hidden">
            <div className="flex flex-col-reverse gap-3 px-4 my-3">
                <div className="text-black flex flex-col gap-2 md:px-4">
                    <h4>{movie.vote_average}/10 rating</h4>
                    <h4>Kannada, English, Hindi, Telugu</h4>
                    <h4>{movie.runtime} min • {genres} • UA • {movie.release_date}</h4>
                </div>

            </div>
            <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">Book Tickets</button>
            </div>
        </div>

        {/* large screen */}
        <div className="relative hidden w-full md:block lg:block" style={{height: "30rem"}}>
            <div className="absolute z-10 w-full h-full" style={{
                backgroundImage: "linear-gradient(90deg, rgb(34,34,34) 24.95%,rgb(34,34,34) 38.3%,rgba(34,34,34,0.04)97.47%,rgb(34,34,34)100%)"
            }} />

            <div className="absolute z-30 left-24 top-10 flex items-center gap-10">

                <div className="w-64 h-96">
                    <img 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt="Movie Poster"
                    className="w-full h-full rounded-lg"
                    />
                </div>

                <div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
                        <div className="text-white flex flex-col gap-2">
                            <h4>{movie.vote_average}/10 <span className='text-xs'>{movie.vote_count} votes</span></h4>
                            <h4>Kannada, English, Hindi, Telugu</h4>
                            <h4>{movie.runtime} min • {genres} • UA • {movie.release_date}</h4>
                        </div>
                        <div className="flex items-center gap-3 w-full">
                            <button className="bg-red-500 px-14 py-3 text-white font-semibold rounded-lg">Book Tickets</button>
                        </div>
                    </div>
                </div>

            </div>
            <img 
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="background poster"
            className="w-full h-full object-cover object-center"
            />
        </div>
   </div>
   </>
  )
}

export default MovieHero