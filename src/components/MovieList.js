import React from 'react';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  
  if (props.movies == null || props.movies.length === 0) {
    return null; // or any fallback content if there are no movies
  }
  
  return (
    <>
      {props.movies.map((movie) => (
        <div className='image-container d-flex justify-content-start m-3' key={movie.imdbID}>
          <img src={movie.Poster} alt='movie' />
          <div className='overlay d-flex align-items-center justify-content-center'>
          {movie.Plot && <p className="movie-plot">{movie.Plot}</p>} {/* Display movie plot if available */}
          </div>
          <div className="movie-info">
            <h3 className="movie-title">{movie.Title}</h3>
            <p className="movie-year">{movie.Year}</p>
            <button onClick={() => props.handleFavouritesClick(movie)}><FavouriteComponent/></button>
            
          </div>
          
        </div>
      ))}
    </>
  );
};

export default MovieList;
