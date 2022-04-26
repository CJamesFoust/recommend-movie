import React, { useState } from 'react';

export default function FindMovies(props) {
    var {movieList, setMovieList} = props;

    // const apiKey = "&api_key=777bb2bcfcac58e60849e1289c0ee269"
    // const url = `https://api.themoviedb.org/3/discover/movie?with_original_language=en&vote_average.gte=8.0`
    // let page = 1;

    // axios.get(`${url}${apiKey}&page=${page}`)
    fetch("https://api.themoviedb.org/3/discover/movie?with_genres=16&with_original_language=en&vote_average.gte=8.0&api_key=777bb2bcfcac58e60849e1289c0ee269")
        .then(res => {
            const movies = res.data;
            setMovieList(movies);
            console.log(movieList)
        })
    
    return movieList;
}