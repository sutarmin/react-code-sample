import {put, select, takeEvery} from 'typed-redux-saga';

import {pureActions as currentPageActions} from '@/modules/trainings/grammar/store/current-page';
import {pureActions as currentStepActions} from '@/modules/trainings/grammar/store/current-step';

import {stepsSelector} from '../training-config/selectors';

import {selectGrammarTrainingStepIndex} from './selectors';

function* handleCheckTrainingComplete() {

        const stepIndex = yield * select(selectGrammarTrainingStepIndex);
        const steps = yield * select(stepsSelector);

        if (stepIndex + 1 < steps.length) {
            yield * put(currentStepActions.addStep());
        } else {
            yield * put(currentPageActions.showResultsPage());
        }

}

export function* run() {
    yield * takeEvery(currentStepActions.next, handleCheckTrainingComplete);
}
