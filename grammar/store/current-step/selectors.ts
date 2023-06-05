import {createSelector} from '@reduxjs/toolkit';

import {TrainingsGrammarStore} from '../types';

export const selectGrammarTrainingStepIndex = createSelector(
    (state: TrainingsGrammarStore) => state.trainingsGrammar?.currentStep,
    (step) => step,
);
