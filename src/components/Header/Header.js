import classes from './Header.module.css';

const Header = props => {
    return (
        <div className={classes.Header}>
            <h1>Movies App!</h1>
            <p>Welcome to the best movie database in town!</p>
        </div>
    );
}

export default Header;