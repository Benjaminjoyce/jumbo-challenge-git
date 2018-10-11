import { FETCH_CHARACTERS, FETCH_CHARACTER } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CHARACTER:
      return action.payload.data.data.results;

    case FETCH_CHARACTERS:
      return _.mapKeys(action.payload.data.data.results, 'id');

    default:
      return state;
  }
}
