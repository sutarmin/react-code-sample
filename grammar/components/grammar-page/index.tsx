import dynamic from 'next/dynamic';
import React, {useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {useUserAccessToPremiumFeature} from '@/lib/hooks/use-user-access-to-premium-feature';
import {AnalyticsService} from '@/lib/services/analytics.service';
import {RouterService} from '@/lib/services/router.service';
import {ROUTES} from '@/lib/utils/routes';

import {useBoundActions} from '../../store/current-page';
import {grammarTrainingPageSelector} from '../../store/current-page/selectors';
import Final from '../final';
import StartScreen from '../start-grammar-training-screen';
import TopicRulesStoriesOverlay from '../topic-rules-stories-overlay';
import Training from '../training';

import {Component} from './types';
import { useStoriesTopic } from './hooks';

const ChooseTopic = dynamic(() => {
    return import('../choose-topic');
});

const GrammarPage: Component = () => {
    const userHasAccessToPremiumFeature = useUserAccessToPremiumFeature();
    useEffect(() => {
        if (!userHasAccessToPremiumFeature) {
            RouterService.push(ROUTES.TRAININGS);
        }
    }, [userHasAccessToPremiumFeature]);

    const {activeStoriesTopic, setTopic, resetTopic} = useStoriesTopic();

    const page = useSelector(grammarTrainingPageSelector);
    const {showStartPage} = useBoundActions();

    const onShowStartPage = useCallback(() => {
        if (activeStoriesTopic) {
            showStartPage(activeStoriesTopic);
        }
    }, [showStartPage, activeStoriesTopic]);

    const onStoryButtonClick = useCallback(() => {
        AnalyticsService.sendLernGrammarEvent({
            action: 'learn_gram_rules_skip_button_tapped',
        });
        onShowStartPage();
    }, [onShowStartPage]);

    return (
        <>
            {page?.step === 'choose-topic' && <ChooseTopic onSelectTopic={setTopic} />}
            {page?.step === 'start' && <StartScreen />}
            {page?.step === 'training' && <Training />}
            {page?.step === 'results' && <Final topicId={page.topicId} />}
            {activeStoriesTopic && (
                <TopicRulesStoriesOverlay
                    topicId={activeStoriesTopic}
                    onClose={resetTopic}
                    onAction={onStoryButtonClick}
                    onFinish={onShowStartPage}
                />
            )}
        </>
    );
};

export default GrammarPage;
