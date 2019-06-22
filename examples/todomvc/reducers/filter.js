import { SET_FILTER } from '../constants/ActionTypes';
import * as FILTERS from '../constants/TodoFilters'

const initialState = FILTERS.SHOW_ALL;

export default function todos(state = initialState, action) {
  switch(action.type){
    case SET_FILTER:
      return action.filter

    default:
      return state;
  }
}
