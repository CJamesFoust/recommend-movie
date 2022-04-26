import React, { useEffect, useState } from 'react';
import './assets/Body.css';

export default function Body() {

    const [ movieList, setMovieList ] = useState([]);
    const [ genre, setGenre] = useState(28)

    const genreChange = (e) => {
        setGenre(parseInt(e.target.value));
    }
    
    useEffect(() => {

        const fetchMovies = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&with_original_language=en&vote_average.gte=8.0&api_key=777bb2bcfcac58e60849e1289c0ee269`);
            const json = await data.json();
            setMovieList(json.results);
        }

        fetchMovies()
        .catch(console.error)
        console.log(movieList)
    },[genre])

    return (
        <div className="bodyContainer">
            <div className="bodyContent">
                <select name="genre" id="genre" onChange={ genreChange }>
                    <option value="28">Action</option>
                    <option value="10749">Romance</option>
                    <option value="10751">Family</option>
                    <option value="27">Horror</option>
                </select>
                <ul>
                    {movieList.map((item, i) => {
                        return <li key={i}>{ item.title }</li>
                    })}
                </ul>
            </div>
        </div>
    );
}