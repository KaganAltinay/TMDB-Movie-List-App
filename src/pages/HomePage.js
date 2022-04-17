import React, {useState, useEffect} from 'react'
import Movie from '../components/Movie';
import Header from '../components/Header';
import { FEATURED_API, GENRES_API, MOVIES_BY_GENRE, SEARCH_API } from '../constant';
import { useLocation } from 'react-router-dom';

export function HomePage() {
  
  const [genres, setGenres] = useState([]);  
  const [movies, setMovies] = useState([]);
  const [fetchURL, setFetchURL] = useState(FEATURED_API);
  const [isloading, setIsloading] = useState(0)
  
  const location = useLocation();
  const newLocation = location.pathname.replace("/query_parameter=", "");
  const searchParameter =  newLocation !== "/" ? (SEARCH_API + newLocation) : ""; 
    
    const getMovies = (API) => {
      setIsloading(1);
      fetch(API).then((res) => res.json()).then((data) => {
      
        setMovies(data.results);
        setIsloading(0);
        
      });
    }
    
    const getGenres = (API) => {
      fetch(API).then((genre) => genre.json()).then((data) => {
       
        setGenres(data.genres);
         
      });
    }
    
    useEffect(() => {
      getMovies(fetchURL); 
      getGenres(GENRES_API);

    }, [fetchURL])

    useEffect(() => {
      if(!!searchParameter){
        
        getMovies(searchParameter);
      
      }
    }, [searchParameter])

    return (
   <>     
      
      <header>
        <Header/>
      </header>

      <div className='genres'> 
        
          {
            genres.length >0 && genres.map((genre) => {
              return <h2 key={genre.id} onClick={() => {setFetchURL(MOVIES_BY_GENRE + genre.id)}}>{genre.name}</h2>
            } )
          }

        </div>

      <div className='movie-container'>

        {movies.length > 0 ?  (
          movies.map((movie) => (
            <Movie key={movie.id} {...movie}/>  
          ) )
        ) : (isloading === 1 ? (<div className='loading'><h1>{"Movies are loading..."}</h1></div>) : (<div className='no-result'><img src='https://cdn-icons.flaticon.com/png/512/1665/premium/1665715.png?token=exp=1650210327~hmac=1e43ce6c2cade9505a875efbdafc0f7d' alt='No-Result' /> <h1>{"There is no result"}</h1></div>)) }
               
      </div>
      
   </>
  );
};




