/* eslint-disable eqeqeq */
import React from 'react';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    if(props.movies == null || props.movies.length == 0){
        return;
    }
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container d-flex justify-content-start m-3'>
                    <img src={movie.Poster} alt='movie'></img>
                    <div
                        onClick={() => props.handleFavouritesClick(movie)}
                        className='overlay d-flex align-items-center justify-content-center'
                    >
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
    
};

export default MovieList;
