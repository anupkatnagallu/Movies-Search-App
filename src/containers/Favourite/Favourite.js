import { useSelector } from 'react-redux';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import classes from './Favourite.module.css';

const Favourite = props => {
    const favMovies = useSelector(state => {
        return state.favourites;
    });

    const movieClickHanlder = (result) => {
        const link = 'https://www.themoviedb.org/movie/' + result.id;
        window.open(link, '_newtab');
    }

    const movieDetails = [];

    favMovies.forEach(result => {
        movieDetails.push(
            <MovieDetails
                key={result.id}
                title={result.title}
                overview={result.overview}
                rating={result.vote_average}
                img={'https://image.tmdb.org/t/p/w500' + result.poster_path}
                releaseDate={result.release_date}
                click={() => {movieClickHanlder(result)}}
                showFavIcon={false}
                fav={false} />
        )
    });

    return (
        <div className={classes.Favourite}>
            {movieDetails}
        </div>
    );
}

export default Favourite;