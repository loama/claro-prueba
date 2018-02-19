import { combineReducers } from 'redux';
import { showMovies } from './movies'
import { showModal } from './modal'

const rootReducer = combineReducers({
  modal: showModal,
  movie: showMovies,
});

export default rootReducer;
