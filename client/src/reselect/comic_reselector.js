/* @flow */

import { createSelector } from "reselect";
import type { State } from "../flowTypes";
import type { ComicsResults } from "../flowTypes/comicTypes";

const comicSelector = (state: State) => state.entities.comics;

const paginationDataSelector = (state: State) => state.pagination.fetchComics;

const pageComicsTotalSelector = (state: State) =>
  state.pagination.fetchComics.comics;

const relevantComicSelector = createSelector(
  comicSelector,
  paginationDataSelector,
  (comics, data) => {
    const idsList = data.comics && data.comics.ids ? data.comics.ids : null;

    if (!idsList) {
      return;
    }
    const results = idsList.map(item => {
      return comics[item];
    });
    return (results: ComicsResults);
  }
);

export { relevantComicSelector, pageComicsTotalSelector };
