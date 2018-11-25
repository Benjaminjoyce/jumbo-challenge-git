import { createSelector } from 'reselect';

const characterSelector = state => state.entities.marvelCharacters;

const paramsSelector = state => state.pagination.fetchCharacters;

const pageTotalSelector = state => state.pagination.fetchCharacters.characters;

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
