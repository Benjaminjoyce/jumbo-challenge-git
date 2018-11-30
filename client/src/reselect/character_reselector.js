/* @flow */ 


import type{Characters} from '../flowTypes/characterTypes'
import type{State} from '../flowTypes'
import { createSelector } from 'reselect';

const characterSelector =(state:State) => state.entities.characters;

const paramsSelector = (state:State) => state.pagination.fetchCharacters;

const pageTotalSelector = (state:State) => state.pagination.fetchCharacters.characters;

const relevantCharactersSelector = createSelector(
  characterSelector,
  paramsSelector,
  (characters, params) => {
    const idsList =
      params.characters && params.characters.ids ? params.characters.ids : null;

    if (!idsList) {
      return;
    }
    const result = idsList.map(item => {
      return characters[item];
    });
    return result;
  }
);

export { characterSelector, pageTotalSelector, relevantCharactersSelector };
