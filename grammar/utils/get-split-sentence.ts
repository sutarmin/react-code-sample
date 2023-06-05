import {WORD_PLACEHOLDER} from '../consts';

import {SentenceConfig} from './../types/index';

// splits a sentense into two parts: before and after the input field
export function getSplitSentence({template}: SentenceConfig): [string, string] {
    const [before, after] = template.split(WORD_PLACEHOLDER).map(text => text.trim());
    return [before, after];
}
