import { SHOW_MODAL } from '../actions'
import { ADD_TO_MODAL } from '../actions'
import { HIDE_MODAL } from '../actions'

const initialState = {
  val: {
    title: ''
  },
  extendedModal: {
    roles: [{
      talents: {
        talent: []
      }
    }, {
      talents: {
        talent: []
      }
    }, {
      talents: {
        talent: []
      }
    },
    {
      talents: {
        talent: []
      }
    }]
  }
}

export function showModal(state = initialState, action) {
  switch (action.type) {
      case SHOW_MODAL:
          return Object.assign({}, state, {val: action.payload[0]})
      case HIDE_MODAL:
          return Object.assign({}, state, {val: {}})
      case ADD_TO_MODAL:
          // console.log('state')
          // console.log(state)
          return Object.assign({}, state, {extendedModal: action.payload})
      default:
          return state
  }
}
