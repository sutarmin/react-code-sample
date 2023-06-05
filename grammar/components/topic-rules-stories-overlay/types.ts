import {FC} from 'react';

export type Props = {
    topicId: string;
    onClose: () => void;
    onAction?: () => void;
    onFinish?: () => void;
};

export type Component = FC<Props>;

export type TopicGrammarRulePictues = string[];

export type GrammarRulesConfig = Record<string, TopicGrammarRulePictues>;
