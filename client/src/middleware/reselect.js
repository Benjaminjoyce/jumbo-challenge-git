import { createSelector } from 'reselect';

const characterSelector = state => state.entities.marvelCharacters;

const paramsSelector = state => state.pagination.fetchCharacterList;

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

export { characterSelector, paramsSelector, relevantCharactersSelector };

// (characters, idsList) => {
//     characters.map(function (val) {
//         return (idsList.includes(val))
//     })
// }
