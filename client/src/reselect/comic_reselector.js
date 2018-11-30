/* @flow */ 
import { createSelector } from 'reselect';
import type{State} from '../flowTypes'

const comicSelector = (state:State) => state.entities.comics;

const paginationDataSelector = (state:State) => state.pagination.fetchComics;

const pageTotalSelector = (state:State) => state.pagination.fetchComics.comics;

const relevantComicSelector = createSelector(
  comicSelector,
  paginationDataSelector,
  (comics, data) => {
    const idsList = data.comics && data.comics.ids ? data.comics.ids : null;

    if (!idsList) {
      return;
    }
    const result = idsList.map(item => {
      return comics[item];
    });

    return result;
  }
);

export { relevantComicSelector, pageTotalSelector };
