import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { IMG_API, GET_MOVİE_BY_ID, API_KEY } from '../constant';
import ReactStars from 'react-rating-stars-component';

export function MovieDetail() {

    const [movieDetail, setMovieDetail] = useState();
    const {movieId} = useParams();
    const getMovieByID = GET_MOVİE_BY_ID.replace("{{movieId}}", movieId).replace("{{API_KEY}}", API_KEY);

    const getMovieDetail = () => {
        fetch(getMovieByID).then((res) => res.json()).then((data) => {
        
          setMovieDetail(data);
    
        })};

    useEffect (() => {
        getMovieDetail()
    }, [movieId])

    if(!movieDetail) {
        return (
            <div>Loading...</div>
        )
    }

  return (
    <>
        <header>
          <Header/>
        </header>

        <div className='movie-detail'>

          <div className='detail-title'>
            <h1> {movieDetail.original_title} </h1>
          </div>

          <div className='detail-poster'>
            <img src={movieDetail.poster_path ? (IMG_API + movieDetail.poster_path) : 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} alt={movieDetail.title}/>
          </div>

          <div className='detail-vote'>
            <h4>IMDB Point:</h4>
            <div className='react-stars'> 
              <ReactStars
                count={5}
                size={22}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                color1={"#f4c10f"}
                value={movieDetail.vote_average / 2}
          ></ReactStars>
            </div>
              <h3>
                {movieDetail.vote_average}
              </h3>
            </div>

          <div className='detail-overview'>
            <h3>Overview:</h3>
            <p>{movieDetail.overview}</p>
          </div>

        </div>
    </>
  )
}


