import {createSlice} from '@reduxjs/toolkit';

import {makeInitialAction} from '@/lib/store/utils/actions';
import {makeBindActions} from '@/lib/store/utils/bound-actions';
import {createEntityReducers} from '@/lib/store/utils/default-slice';

import {SLICE_NAME} from './consts';
import {State} from './types';

const initialState: State = makeInitialAction() as State; 

export const slice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: createEntityReducers(initialState),
});

export const pureActions = slice.actions;
export const boundActionsFabric = makeBindActions(pureActions);

export const reducer = slice.reducer;
