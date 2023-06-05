import BubbleActions from '@/components/grammar-mechanic-actions/components/bubble-actions';
import ChooseWordActions from '@/components/grammar-mechanic-actions/components/choose-word-actions';
import EnterWordActions from '@/components/grammar-mechanic-actions/components/enter-word-actions';

import {GrammarMechanicConfig, GrammarMechanicType, SentenceConfig} from '../types';

import {getCorrectSentence} from './get-correct-sentence';
import {normalizeText} from './normalize-text';

const defaultValidator = (value: string, sentence: SentenceConfig) => {
    return normalizeText(value) === normalizeText(sentence.answer);
};

const defaultTaskText = (sentence: SentenceConfig) => {
    return sentence.word;
};

export const MECHANICS_CONFIG: Record<GrammarMechanicType, GrammarMechanicConfig> = {
    enter: {
        title: 'Enter in the correct form:',
        mechanic: EnterWordActions,
        validator: defaultValidator,
        getTaskTitle: defaultTaskText,
    },
    choose: {
        title: 'Choose the right answer:',
        mechanic: ChooseWordActions,
        validator: defaultValidator,
        getTaskTitle: defaultTaskText,
    },
    make: {
        title: 'Compose the sentense:',
        mechanic: BubbleActions,
        validator: (value, sentence) => {
            const correctValue = getCorrectSentence(sentence);
            return normalizeText(value) === normalizeText(correctValue);
        },
        getTaskTitle: (sentence) => {
            return sentence.translate;
        },
    },
};
