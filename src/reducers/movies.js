import { SHOW_MOVIES } from '../actions'

const initialState = {
    list: []
}

export function showMovies(state = initialState, action) {

    switch (action.type) {
        case SHOW_MOVIES:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state
    }

}
