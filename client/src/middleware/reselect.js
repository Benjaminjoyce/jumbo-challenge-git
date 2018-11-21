import { createSelector } from 'reselect';

const characterSelector = state => state.entities.marvelCharacters;

const paramsSelector = state => state.pagination.fetchCharacterList;

const relevantCharactersSelector = createSelector(
  characterSelector,
  paramsSelector,
  (characters, params) => {
    console.log('reselector characters', characters);
    console.log('reselector params', params);

    const idsList =
      params.characters && params.characters.ids ? params.characters.ids : null;
    console.log('reselector idsList', idsList);
    if (!idsList) {
      return;
    }
    const result = idsList.map(item => {
      return characters[item];
    });

    console.log('reselector results', result);
    return result;
  }
);

export { characterSelector, paramsSelector, relevantCharactersSelector };

// (characters, idsList) => {
//     characters.map(function (val) {
//         return (idsList.includes(val))
//     })
// }
