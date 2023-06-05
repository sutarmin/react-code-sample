import {GrammarMechanicType} from '../../types';

export type GrammarMechanicResult = 'failure' | 'success';

export interface GrammarTrainingStepResult {
    sentenceId: number;
    mechanic: GrammarMechanicType;
    result: GrammarMechanicResult;
}

export type State = GrammarTrainingStepResult[];
