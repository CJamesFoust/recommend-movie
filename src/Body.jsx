import React, { useEffect, useState } from 'react';
import './assets/Body.css';
import image from './assets/close.png';

export default function Body() {

    const [ movieList, setMovieList ] = useState([]);
    const [ genre, setGenre] = useState(28);
    const [ poster, setPoster ] = useState('');
    const [ title, setTitle ] = useState('')
    const [ overview, setOverview ] = useState('')
    const [ voteAverage, setVoteAverage ] = useState(0.0); 

    const genreChange = (e) => {
        setGenre(parseInt(e.target.value));
    }
    
    useEffect(() => {

        const fetchMovies = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&with_original_language=en&api_key=777bb2bcfcac58e60849e1289c0ee269`);
            const json = await data.json();
            setMovieList(json.results);
        }

        fetchMovies()
        .catch(console.error)
    },[genre])

    const closeDescription = () => {
        let box = document.getElementById('descriptionBox');
        box.classList.add('hidden');
        return
    }

    const changeDescriptionContent = (i) => {
        let box = document.getElementById('descriptionBox');
        box.classList.remove('hidden');
        setPoster(movieList[i].poster_path)
        setTitle(movieList[i].title);
        setOverview(movieList[i].overview);
        setVoteAverage(movieList[i].vote_average);
        return;
    }

    return (
        <div className="bodyContainer">
            <div className="descriptionContainer hidden" id="descriptionBox">
                <div className="closeDescription">
                    <img src={image} className="closeButton" onClick={closeDescription} />
                </div>
                <div className="innerDescription">
                    <div className="descriptionLeft">
                        <img src={`https://image.tmdb.org/t/p/w500/${ poster }`} className="posterBig" />
                    </div>
                    <div className="descriptionRight">
                        <div className="title">{ title }</div>
                        <div className="overview">{ overview }</div>
                        <div className="voteAverage">
                            Average Rating<br/>
                            { voteAverage } / 10
                        </div>
                    </div>
                </div>
            </div>
            <div className="bodyContent">
                <select name="genre" id="genre" onChange={ genreChange } className="genre">
                    <option value="28">Action</option>
                    <option value="10749">Romance</option>
                    <option value="10751">Family</option>
                    <option value="27">Horror</option>
                </select>
                <div className="sliderContainer">
                    {movieList.slice(0,5).map((item, i) => {
                            return <img key={i} src={`https://image.tmdb.org/t/p/w500/${item.poster_path }`} className="poster item"  onClick={ () => changeDescriptionContent(parseInt(i)) } />
                        })}
                </div>
                <div className="sliderContainer">
                    {movieList.slice(5,10).map((item, i) => {
                            return <img key={i} src={`https://image.tmdb.org/t/p/w500/${item.poster_path }`} className="poster item" onClick={ () => changeDescriptionContent(parseInt(i)+5) } />
                        })}
                </div>
                <div className="sliderContainer">
                    {movieList.slice(10,15).map((item, i) => {
                            return <img key={i} src={`https://image.tmdb.org/t/p/w500/${item.poster_path }`} className="poster item" onClick={ () => changeDescriptionContent(parseInt(i)+10) } />
                        })}
                </div>
            </div>
        </div>
    );
}