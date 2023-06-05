import {createSelector} from '@reduxjs/toolkit';

import {TrainingsGrammarStore} from '../types';

export const trainingConfigSelector = createSelector(
    (state: TrainingsGrammarStore) => state.trainingsGrammar?.trainingConfig,
    (config) => config,
);

export const sentencesSelector = createSelector(trainingConfigSelector, (config) => config.data?.sentences || []);

export const stepsSelector = createSelector(trainingConfigSelector, (config) => config.data?.config.steps || []);
