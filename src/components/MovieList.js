import Movie from "./Movie";

const MovieList = ({ movies }) => {
    return (
        <>
        <div className="MovieList">
        <ul>
            {movies.map((movie) =>
                <Movie
                    key={movie.id}
                    name={movie.name}
                    url={movie.url}
                />
            )}
        </ul>
        </div>
        </>
    );
}




export default MovieList