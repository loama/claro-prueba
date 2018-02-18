import { combineReducers } from 'redux';
import { showMovies } from './movies'

const rootReducer = combineReducers({
  movie: showMovies
});

export default rootReducer;
