import {WORD_PLACEHOLDER} from '../consts';

import {SentenceConfig} from './../types/index';
import {SPACE_SYMBOL} from './consts';

export function getCorrectSentence({template, answer}: SentenceConfig): string {
    return template.replace(WORD_PLACEHOLDER, answer).replace(/  +/g, SPACE_SYMBOL).trim();
}
