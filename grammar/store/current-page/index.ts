import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {makeBindActions, makeBindActionsHook} from '@/lib/store/utils/bound-actions';

import {SLICE_NAME} from './consts';
import {State} from './types';

const initialState: State = {step: 'choose-topic'} as State;

const slice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        showStartPage: (_, action: PayloadAction<string>) => {
            return {
                step: 'start',
                topicId: action.payload,
            };
        },
        showTrainingPage: (state) => {
            if (!state || state?.step === 'choose-topic') {
                return;
            }
            return {
                step: 'training',
                topicId: state.topicId,
            };
        },
        showResultsPage: (state) => {
            if (!state || state?.step === 'choose-topic') {
                return;
            }
            return {
                step: 'results',
                topicId: state.topicId,
            };
        },
        reset: () => initialState,
    },
});

export const pureActions = slice.actions;
export const boundActionsFabric = makeBindActions(pureActions);
export const useBoundActions = makeBindActionsHook(pureActions);

export const reducer = slice.reducer;
