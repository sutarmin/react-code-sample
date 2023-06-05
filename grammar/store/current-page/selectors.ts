import {createSelector} from '@reduxjs/toolkit';

import {TrainingsGrammarStore} from '@/modules/trainings/grammar/store/types';

export const grammarTrainingPageSelector = createSelector(
    (state: TrainingsGrammarStore) => state.trainingsGrammar?.currentPage,
    (page) => page,
);

export const grammarTopicIdSelector = createSelector(grammarTrainingPageSelector, page => {
    if (!page || page.step === 'choose-topic') {
        return undefined;
    }
    return page.topicId;
});
