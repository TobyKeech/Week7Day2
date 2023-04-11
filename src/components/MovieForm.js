import React, { useState } from 'react';
import MovieBox from '../containers/MovieBox';

const MovieForm = ({onMovieSubmit}) => {
    const [name, setName] = useState ("")
    const [url, setUrl] = useState("")

    const handleNameChange = (event) => setName (event.target.value)
    const handleUrlChange = (event) => setUrl(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        const nameValue = name.trim()
        const urlValue = url.trim()
        if (!nameValue || !urlValue) return

        onMovieSubmit({
            name : nameValue,
            url : urlValue
        })

        setName("")
        setUrl("")
    }
    

return (
    <div className='MovieListInput'>
    <form onSubmit = {handleSubmit}>
     <input 
     type ="name"
     placeholder="Movie Name"
     value = {name}
     onChange={handleNameChange}
     />

     <input 
     type = "url"
     placeholder="type url of IMDB"
     value={url}
     onChange={handleUrlChange}
     />
     <button>Add Movie</button>
    </form>
    </div> 
  );

}

export default MovieForm;