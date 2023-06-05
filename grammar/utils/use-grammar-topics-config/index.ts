import {useConfig} from '@/lib/queries/configs/useConfig';
import {CONFIG_NAMES} from '@/lib/utils/configs/consts';

import {GrammarTopicsConfig} from './types';

export function useGrammarTopicsConfig() {
    return useConfig<GrammarTopicsConfig>(CONFIG_NAMES['FRONTEND_TRAINING_GRAMMAR-TOPICS']);
}
