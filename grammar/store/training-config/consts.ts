import {makeSliceName} from '@/lib/store/utils/slice-name';

import {BASE_SLICE_NAME} from '../consts';

export const SLICE_NAME =  makeSliceName(BASE_SLICE_NAME, 'training-config');
