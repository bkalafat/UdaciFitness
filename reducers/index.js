import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'
import AddEntry from '../components/AddEntry';

function entries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {...state, ...action.entries}

    case AddEntry:
      return {...state, ...action.entry}

    default:
      return state;
  }
}