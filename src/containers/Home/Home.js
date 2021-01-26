import classes from './Home.module.css';
import Search from '../../components/Search/Search';
import Button from '../../components/Button/Button';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import axios from 'axios';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/actions';

const Home = props => {
    const apiKey = '857c8d4c7a4e195947d5c858d5963ab3';
    const link = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
    let searchLink;
    let movieName = '';
    const [movieDetails, setMovieDetails] = useState([]);

    const dispatch = useDispatch();

    const favMovies = useSelector(state => {
        return state.favourites;
    });

    const addToFavourites = movieDetails => dispatch({type: actions.ADD_FAVOURITE, movieDetails: movieDetails});

    const textChangeHandler = (event) => {
        movieName = event.target.value;
    }

    const movieClickHanlder = (event, result) => {
        if(event.target.tagName !== 'H2'){
            const link = 'https://www.themoviedb.org/movie/'+result.id;
            window.open(link,'_newtab');
        }else {
            if(event.target.textContent === '\u2661'){
                event.target.textContent = '\u2665';
                addToFavourites(result);
            }
        }
    }

    const searchMovieHandler = () => {
        searchLink = link + movieName;
        axios.get(searchLink)
            .then(response => {
                let results = response.data.results;
                let details = [];
                results.forEach(result => {
                    let isFav = false;
                    console.log(favMovies);

                    favMovies.forEach(favMovie => {
                        console.log(favMovie.id);
                        if(favMovie.id === result.id) {
                            isFav = true;
                        }
                    });
                    details.push(
                        <MovieDetails 
                            key={result.id} 
                            title={result.title} 
                            overview={result.overview} 
                            rating={result.vote_average} 
                            img={'https://image.tmdb.org/t/p/w500'+result.poster_path}
                            releaseDate={result.release_date}
                            click={event => movieClickHanlder(event, result)}
                            showFavIcon
                            fav={isFav} />
                    );
                });

                setMovieDetails(details);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className={classes.Home}>
            <div className={classes.SearchMovie}>
                <p>Search for a movie</p>
                <Search change={textChangeHandler} />
                <Button submit={searchMovieHandler}>Submit</Button>
            </div>
            <div className={classes.MovieDetails}>
                {movieDetails}
            </div>
        </div>
    );
}

export default Home;