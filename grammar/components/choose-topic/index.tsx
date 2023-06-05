import {Hide, Show} from '@chakra-ui/react';
import Link from 'next/link';
import React, {memo} from 'react';

import BackIcon from '@/assets/back.svg';
import Header from '@/components/header';
import Text from '@/components/text';
import {ROUTES} from '@/lib/utils/routes';

import TopicCards from './components/topic-cards';
import {GrammarChooseTopicScrollWrapper, GrammarChooseTopicCenterWrapper, Title, MobileHeader} from './styles';
import {Component} from './types';

const ChooseTopic: Component = ({onSelectTopic}) => {    
    return (
        <>
            <Hide above="mobile">
                <MobileHeader>
                    <Link href={ROUTES.TRAININGS}>
                        <BackIcon />
                    </Link>
                </MobileHeader>
            </Hide>
            <Show above="mobile">
                <Header />
            </Show>

            <GrammarChooseTopicScrollWrapper>
                <GrammarChooseTopicCenterWrapper>
                    <Title>
                        <Text id="grammar/choose-topic/title" />
                    </Title>
                    <TopicCards onSelectTopic={onSelectTopic} />
                </GrammarChooseTopicCenterWrapper>
            </GrammarChooseTopicScrollWrapper>
        </>
    );
};

export default memo(ChooseTopic);
