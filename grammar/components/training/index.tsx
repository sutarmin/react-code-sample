import React, {useEffect} from 'react';

import {AnalyticsService} from '@/lib/services/analytics.service';

import Content from './components/content';
import {Wrapper} from './styles';
import {Component} from './types';

const Training: Component = () => {
    useEffect(() => {
        AnalyticsService.sendLernGrammarEvent({action: 'learn_gram_start'});
    }, []);
    return (
        <Wrapper>
            <Content />
        </Wrapper>
    );
};

export default Training;
