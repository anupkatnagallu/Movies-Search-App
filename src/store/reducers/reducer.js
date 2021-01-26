import * as actions from '../actions/actions';

const initialState = {
    favourites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_FAVOURITE:
            const dupeState = {...state};
            const favMovies = [...dupeState.favourites];
            favMovies.push(action.movieDetails);
            return {
                ...state,
                favourites: favMovies
            }
        default: 
            return state;
    }
}

export default reducer;