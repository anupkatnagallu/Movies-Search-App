import classes from './Search.module.css';

const Search = props => {
    return (
        <input className={classes.Search} placeholder='Dark knight' onChange={props.change}/>
    );
}

export default Search;