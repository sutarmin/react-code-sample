import {ElementType} from 'react';

import {GrammarTrainingStepResult} from '../store/results/types';

export type GrammarMechanicType = 'enter' | 'make' | 'choose';

export interface SentenceConfig {
    id: number;
    word: string;
    template: string;
    options: string[];
    answer: string;
    translate: string;
}

export interface StepConfig {
    mechanic: GrammarMechanicType;
    sentence_index: number;
}

export interface GrammarTrainingConfig {
    sentences: SentenceConfig[];
    config: {
        steps: StepConfig[];
        mechanics: GrammarMechanicType[];
    };
    rules?: string[];
}

export interface GrammarMechanicProps {
    sentence: SentenceConfig;
    validator: (userAnwer: string, sentence: SentenceConfig) => boolean;
    handleCheckAnswer: (result: GrammarTrainingStepResult) => void;
}

export interface GrammarMechanicConfig {
    title: string;
    getTaskTitle: (sentence: SentenceConfig) => string;
    mechanic: ElementType<GrammarMechanicProps>;
    validator: (userAnwer: string, sentence: SentenceConfig) => boolean;
}
