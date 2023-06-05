import {CloseButton as VendorCloseButton, useBoolean} from '@chakra-ui/react';
import React, {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';

import {AnalyticsService} from '@/lib/services/analytics.service';
import {boundActionsFabric} from '@/modules/trainings/grammar/store/current-page';
import {grammarTopicIdSelector} from '@/modules/trainings/grammar/store/current-page/selectors';
import {selectGrammarTrainingStepIndex} from '@/modules/trainings/grammar/store/current-step/selectors';
import StopTrainingModal from '@/modules/trainings/modals/stop-training-modal';

import {CloseButtonWrapper} from './styles';
import {Component} from './types';

const CloseButton: Component = () => {
    const [isStopTrainingModalOpen, setIsStopTrainingModalOpen] = useBoolean();

    const topicId = useSelector(grammarTopicIdSelector);
    const currentStep = useSelector(selectGrammarTrainingStepIndex);
    const handleStopTraining = useCallback(() => {
        AnalyticsService.sendLernGrammarEvent({
            action: 'learn_gram_quit',
            current_gram_step: currentStep + 1,
            gram_topic: topicId,
        });
        boundActionsFabric().reset();
    }, [currentStep, topicId]);

    return (
        <>
            <CloseButtonWrapper>
                <VendorCloseButton size="lg" onClick={setIsStopTrainingModalOpen.on} />
            </CloseButtonWrapper>
            <StopTrainingModal
                isOpen={isStopTrainingModalOpen}
                handleStay={setIsStopTrainingModalOpen.off}
                handleStopTraining={handleStopTraining}
            />
        </>
    );
};

export default memo(CloseButton);
