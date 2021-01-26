import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>Favourite</NavigationItem>
        </ul>
    );
}

export default NavigationItems;