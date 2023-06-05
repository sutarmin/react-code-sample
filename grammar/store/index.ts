import {combineReducers} from '@reduxjs/toolkit';

import {reducer as currentPageReducer} from './current-page';
import {reducer as currentStepReducer} from './current-step';
import {reducer as resultsReducer} from './results';
import {reducer as trainingConfigReducer} from './training-config';

export const grammarReducer = combineReducers({
    currentPage: currentPageReducer,
    currentStep: currentStepReducer,
    trainingConfig: trainingConfigReducer,
    results: resultsReducer,
});

export type TrainingsGrammarReducer = ReturnType<typeof grammarReducer>;
