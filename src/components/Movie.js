import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IMG_API } from '../constant';

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 6) {
    return "orange"
  } else {
    return "red"
  }
}

const Movie = ({ title, poster_path, overview, vote_average, id }) => {
  
  const navigate = useNavigate()

  return (
    <div className='movie'>

      <img onClick={() => navigate(`/movie/${id}`)}
        src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} alt={title} />
      
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
      </div>
      
      <div className='movie-overview'>
        <h3>Overview: </h3>
        <p>{overview}</p>
      </div>
    </div>

  );


}


export default Movie;
