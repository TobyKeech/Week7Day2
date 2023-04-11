const Movie = ({ id, name, url }) => {
    return (
        <>
            <p>{id}</p>
            <p>{name}</p>
            <p>{url}</p>
        </>
    );
}

export default Movie;