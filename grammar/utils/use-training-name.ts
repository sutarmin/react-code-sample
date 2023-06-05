import {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {grammarTopicIdSelector} from '../store/current-page/selectors';

import {useGrammarTopicsConfig} from './use-grammar-topics-config';

export function useTrainingName() {
    const topicId = useSelector(grammarTopicIdSelector);
    const {data, isFetched} = useGrammarTopicsConfig();

    const title = useMemo(() => {
        if (!data || !topicId) {
            return null;
        }
        const topic = data.content.topics.find(({id}) => id === topicId);
        if (!topic) {
            return null;
        }
        return `${topic.title}. ${topic.subtitle}`;
    }, [topicId, data]);

    return {title, isFetched};
}
