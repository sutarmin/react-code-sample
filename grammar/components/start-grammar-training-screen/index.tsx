import React, {useEffect} from 'react';

import * as smileWithGlassesLotte from '@/assets/smile-with-glasses.json';
import Lottie from '@/components/ui-kit/lottie';
import Text from '@/components/text';
import {boundActionsFabric} from '@/modules/trainings/grammar/store/current-page';

import {START_SCREEN_TIMEOUT_MS} from './consts';
import {Wrapper, HeaderText, AnimationWrapper} from './styles';
import {Component} from './types';

const StartGrammarTrainingScreen: Component = () => {
    useEffect(() => {
        const timerId = setTimeout(() => {
            boundActionsFabric().showTrainingPage();
        }, START_SCREEN_TIMEOUT_MS);
        return () => {
            clearTimeout(timerId);
        };
    }, []);
    return (
        <Wrapper>
            <AnimationWrapper>
                <Lottie play animationData={smileWithGlassesLotte} />
            </AnimationWrapper>
            <HeaderText>
                <Text id="grammar/start/title" />
            </HeaderText>
        </Wrapper>
    );
};

export default StartGrammarTrainingScreen;
