const Movie = ({ name, url }) => {
    return (
        <>
        <li>
        <a href={url}>
            <p>{name}</p>
        </a>
        </li>
        </>
    );
}

export default Movie;