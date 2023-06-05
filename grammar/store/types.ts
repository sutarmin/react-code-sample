import {Store} from '@/lib/store/types/store';

import {TrainingsGrammarReducer} from './index';

export type TrainingsGrammarStore = Store<{
    trainingsGrammar: TrainingsGrammarReducer
}>;
