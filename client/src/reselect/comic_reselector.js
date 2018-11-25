import { createSelector } from 'reselect';

const comicSelector = state => state.entities.comics;

const paginationDataSelector = state => state.pagination.fetchComics;

const pageTotalSelector = state => state.pagination.fetchComics.comics;

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
