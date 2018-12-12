/* @flow */

import type {
  Characters,
  CharactersResults
} from "../flowTypes/characterTypes";
import type { State, SecondLayerPagination } from "../flowTypes";
import { createSelector } from "reselect";

type CharacterSelectorFunction = State => Characters;
const characterSelector: CharacterSelectorFunction = (state: State) =>
  state.entities.characters;

type ParamsSelectorFunction = State => SecondLayerPagination;
const paramsSelector: ParamsSelectorFunction = (state: State) =>
  state.pagination.fetchCharacters;

const pageTotalSelector = (state: State) =>
  state.pagination.fetchCharacters.characters;

type RelevantCharactersSelectorFunction = () => { results: CharactersResults };
const relevantCharactersSelector = createSelector(
  characterSelector,
  paramsSelector,
  (characters, params) => {
    const idsList =
      params.characters && params.characters.ids ? params.characters.ids : null;

    if (!idsList) {
      return null;
    }
    const results = idsList.map(item => {
      return characters[item];
    });
    return results;
  }
);

export { characterSelector, pageTotalSelector, relevantCharactersSelector };
