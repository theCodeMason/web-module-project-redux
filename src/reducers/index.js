import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favReducer from './favoritesReducer';

export default combineReducers ({
    movies: movieReducer,
    favorites: favReducer
});
