import {createSelector} from '@reduxjs/toolkit';

import {MECHANICS_CONFIG} from '../utils/mechanic-configs';

import {selectGrammarTrainingStepIndex} from './current-step/selectors';
import {sentencesSelector, stepsSelector} from './training-config/selectors';

export const selectCurrentStepData = createSelector(
    sentencesSelector,
    stepsSelector,
    selectGrammarTrainingStepIndex,
    (sentences, steps, currentStepIndex) => {
        const {mechanic, sentence_index} = steps[currentStepIndex];
        return {
            mechanic: MECHANICS_CONFIG[mechanic],
            sentence: sentences[sentence_index],
        };
    },
);

export const grammarTrainingProgressSelector = createSelector(
    stepsSelector,
    selectGrammarTrainingStepIndex,
    (steps, currentStepIndex) => (currentStepIndex / steps.length) * 100,
);
