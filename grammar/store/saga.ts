import {all} from 'typed-redux-saga';

import {run as runCurrentPageSaga} from './current-page/saga';
import {run as runCurrentStepSaga} from './current-step/saga';
import {run as runTrainingConfigSaga} from './training-config/saga';

export function * runTrainingsGrammarSaga() {
    return yield * all([
        runTrainingConfigSaga(),
        runCurrentStepSaga(),
        runCurrentPageSaga(),
    ]);
}
