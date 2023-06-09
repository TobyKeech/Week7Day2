import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import MovieForm from '../components/MovieForm';

const MovieBox = () => {
    const [movies, setMovies] = useState(
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Hurt Locker",
                url: "https://www.imdb.com/title/tt0887912/"
            },
            {
                id: 3,
                name: "Avengers: Endgame",
                url: "https://www.imdb.com/title/tt4154796/"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", 
                url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "John Wick",
                url: "https://www.imdb.com/title/tt2911666/"
            }
        ]
    )

    const addMovie = (movie) => {
        movie.id = Date.now()
        setMovies([...movies, movie])
    }

    return (

        <>
        <MovieList movies={movies} />

        <hr></hr>


        <div className='MovieListInput'><a href=' https://www.imdb.com/calendar/?region=gb'><p>View Upcoming Movies {">>"} </p></a></div>

        <MovieForm onMovieSubmit={addMovie}/>

        </>

    );
}


export default MovieBox;

