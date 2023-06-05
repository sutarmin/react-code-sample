import {createSelector} from '@reduxjs/toolkit';

import {TrainingsGrammarStore} from '../types';

export const selectResults = createSelector(
    (state: TrainingsGrammarStore) => state.trainingsGrammar?.results,
    (results) => results,
);

export const selectCorrectAnswersAmount = createSelector(selectResults, (results) =>
    results.filter(({result}) => result === 'success').length,
);
