/* The code bellow is an excerpt from real-world-example and edited
by ben.j. Not all concepts are fully understood as of 10am 15/11/18 */

import union from 'lodash/union';

/* "Creates a reducer managing pagination, given the action types to handle,
 and a function telling how to extract the key from an action."-example */

const paginate = ({ types, mapActionToKey }) => {
  //validate that arguements
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.');
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.');
  }
  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.');
  }

  const [requestType, successType, failureType] = types;

  const updatePagination = (
    state = {
      data: { isFetching: false },
      ids: []
    },
    action
  ) => {
    switch (action.type) {
      case requestType:
        return {
          ...state,
          data: { isFetching: true },
          ids: []
        };
      case successType:
        return {
          ...state,
          data: {
            ...action.response.pagination,
            isFetching: false
          },
          ids: action.response.normRes.result
          // ids: union(state.ids, action.response.normRes.result)
        };
      case failureType:
        return {
          ...state,
          isFetching: false
        };
      default:
        return state;
    }
  };
  return (state = {}, action) => {
    // "Update pagination by key"-example
    if (!action.response) {
      return state;
    }
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action);
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.');
        }

        return {
          ...state,
          [key]: updatePagination(state[key], action)
        };
      default:
        return state;
    }
  };
};

export default paginate;
