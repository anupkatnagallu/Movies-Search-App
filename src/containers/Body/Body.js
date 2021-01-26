import Home from '../Home/Home';
import Favourite from '../Favourite/Favourite';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import { Route } from 'react-router-dom';

const Body = props => {
    return (
        <div>
            <NavigationItems />
            <Route path='/home' component={Home} />
            <Route path='/favourite' component={Favourite} />
        </div>
    )
}

export default Body;