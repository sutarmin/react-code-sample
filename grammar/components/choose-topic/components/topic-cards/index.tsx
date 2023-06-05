import React, {memo} from 'react';

import CenterSpinner from '@/components/ui-kit/center-spinner';
import {useGrammarTopicsConfig} from '@/modules/trainings/grammar/utils/use-grammar-topics-config';

import TopicCard from '../topic-card';

import {TopicCardsWrapper} from './styles';
import {Component} from './types';

const TopicCards: Component = ({onSelectTopic}) => {
    const {data, isFetched} = useGrammarTopicsConfig();

    if (!data || !isFetched) {
        return <CenterSpinner />;
    }

    return (
        <TopicCardsWrapper>
            {data.content.topics.map((topic) => (
                <TopicCard key={topic.id} {...topic} onClick={() => onSelectTopic(topic.id)} />
            ))}
        </TopicCardsWrapper>
    );
};

export default memo(TopicCards);
