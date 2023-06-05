import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, takeEvery} from 'typed-redux-saga';

import {TrainingGrammarAPI} from '@/lib/api/training/grammar/index';
import {TrainingGrammarConfigResponse} from '@/lib/api/training/grammar/types';
import {pureActions as currentPageActions} from '@/modules/trainings/grammar/store/current-page';
import {pureActions as currentStepActions} from '@/modules/trainings/grammar/store/current-step';
import {pureActions as configActions} from '@/modules/trainings/grammar/store/training-config';

function* setLoadingStatus() {
    yield * put({type: configActions.request});
}

function* handleRequestStartConfig({payload: topicId}: PayloadAction<string>) {
    try {
        yield * call(setLoadingStatus);

        yield * put({type: configActions.reset});
        yield * put({type: currentStepActions.reset});

        const {data} = yield * call(TrainingGrammarAPI.requestConfig, {
            tense: topicId,
        });

        yield * call(handleSuccess, data);
    } catch (error) {
        yield * call(handleError, error as Error);
    }
}

function* handleSuccess(data: TrainingGrammarConfigResponse) {
    yield * put({
        type: configActions.success,
        payload: data,
    });
}

function* handleError<T extends Error>(error: T) {
    yield * put({
        type: configActions.error,
        payload: error.toString(),
    });
}

export function* run() {
    yield * takeEvery(currentPageActions.showStartPage, handleRequestStartConfig);
}
