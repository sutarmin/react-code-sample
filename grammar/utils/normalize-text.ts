import {ALPHANUMERIC_REGEX} from './consts';

export function normalizeText(value: string) {
    return value.trim().toLowerCase().replace(ALPHANUMERIC_REGEX, '');
}
