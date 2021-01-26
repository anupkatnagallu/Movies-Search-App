import classes from './MovieDetails.module.css';

const MovieDetails = props => {
    const emptyHeart = '\u2661';
    const fullHeart = '\u2665';

    const currentHeart = props.fav ? fullHeart : emptyHeart;

    let favIcon = props.showFavIcon ? <h2>{currentHeart}</h2> : null;
    
    return (
        <div className={classes.MovieDetails} onClick={props.click}>
            <img src={props.img} alt='Movie Poster' />
            <h3>{props.title}</h3>
            <p>{props.overview}</p>
            <p><strong>Release Date: </strong>{props.releaseDate}</p>
            <p><strong>Rating: </strong>{props.rating}</p>
            {favIcon}
        </div>
    );
}

export default MovieDetails;