import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
    let link = '/home';
    switch(props.children) {
        case 'Home':
            link = '/home'
            break;
        case 'Favourite':
            link = '/favourite'
            break;
        default:
            link = '/home';
    }
    return (
        <li>
            <NavLink to={link} className={classes.NavigationItem} activeClassName={classes.Active}>{props.children}</NavLink>
        </li>
    );
}

export default NavigationItem;