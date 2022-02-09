import './Row.css';
import React, { useEffect, useState } from 'react';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [ movies, setMovies ] = useState([]);

    // A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        //if [] is blank, run once when the code runs and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();

    },/*To update the global variable or prop */ [fetchUrl]);

  return (
    <div className='row'>
          <h2>{ title }</h2>
    <div className="row_posters">
        {/* Several row posters */}
        {movies.map(movie => (
            <img
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                key={ movie.id }
                src={ `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }` }
                alt={ movie.name } />
        ) )}
    </div>  
    </div>
    )  
}

export default Row;
