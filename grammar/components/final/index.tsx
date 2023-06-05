import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';

import BaseFinal from '@/components/grammar/final';

import {useBoundActions} from '../../store/current-page';
import {selectCorrectAnswersAmount} from '../../store/results/selectors';
import {useTrainingName} from '../../utils/use-training-name';

import {Component} from './types';

const Final: Component = ({topicId}) => {
    const correctAnswersCount = useSelector(selectCorrectAnswersAmount);
    const {showStartPage, showTrainingPage, reset} = useBoundActions();

    const handleReset = useCallback(() => {
        reset();
        showStartPage(topicId);
    }, [showStartPage, topicId, reset]);

    const handleQuit = useCallback(() => {
        reset();
        showTrainingPage();
    }, [reset, showTrainingPage]);

    const {title} = useTrainingName();
    return (
        <BaseFinal
            correctAnswersCount={correctAnswersCount}
            handleQuit={handleQuit}
            handleReset={handleReset}
            grammarTrainingName={title || ''}
        />
    );
};

export default Final;
