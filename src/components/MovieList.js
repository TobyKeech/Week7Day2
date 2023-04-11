import Movie from "./Movie";

const MovieList = ({ movies }) => {
    return (
        <>
            <h3>Movie List</h3>
        <ul>
            {movies.map((movie) =>
                <Movie
                    key={movie.id}
                    name={movie.name}
                    url={movie.url}
                />
            )}
        </ul>
        </>
    );
}




export default MovieList