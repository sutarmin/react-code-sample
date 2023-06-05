import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {makeBindActions, makeBindActionsHook} from '@/lib/store/utils/bound-actions';

import {SLICE_NAME} from './consts';
import {State, GrammarTrainingStepResult} from './types';

const initialState: State = [] as State;

const slice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        add: (state, action: PayloadAction<GrammarTrainingStepResult>) => {
            state.push(action.payload);
        },
        reset: () => initialState,
    },
});

export const pureActions = slice.actions;
export const boundActionsFabric = makeBindActions(pureActions);
export const useBoundActions = makeBindActionsHook(pureActions);

export const reducer = slice.reducer;
