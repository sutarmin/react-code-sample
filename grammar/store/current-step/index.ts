import {createSlice} from '@reduxjs/toolkit';

import {makeBindActions, makeBindActionsHook} from '@/lib/store/utils/bound-actions';

import {SLICE_NAME} from './consts';
import {State} from './types';

const initialState: State = 0 as State;

const slice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: { 
        next: (state) => state, // caught by saga that checks if training should be finished
        addStep: (state) => state + 1, // sent by saga when step increases
        reset: () => initialState,
    },
});

export const pureActions = slice.actions;
export const boundActionsFabric = makeBindActions(pureActions);
export const useBoundActions = makeBindActionsHook(pureActions);

export const reducer = slice.reducer;
