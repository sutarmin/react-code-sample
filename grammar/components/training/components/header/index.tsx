import {useBoolean} from '@chakra-ui/react';
import {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';

import {BookIcon} from '@/components/ui-kit';
import CenterSpinner from '@/components/ui-kit/center-spinner';
import {AnalyticsService} from '@/lib/services/analytics.service';
import {grammarTopicIdSelector} from '@/modules/trainings/grammar/store/current-page/selectors';
import {grammarTrainingProgressSelector} from '@/modules/trainings/grammar/store/selectors';
import {useGrammarTopicsConfig} from '@/modules/trainings/grammar/utils/use-grammar-topics-config';

import TopicRulesStoriesOverlay from '../../../topic-rules-stories-overlay';
import TrainingName from '../../../training-name';
import CloseButton from '../close-button';

import {ProgressBarStyled, TrainingTitleButton} from './styles';
import {Component} from './types';

const Header: Component = () => {
    const topicId = useSelector(grammarTopicIdSelector);
    const {data, isFetched} = useGrammarTopicsConfig();
    const progress = useSelector(grammarTrainingProgressSelector);

    const [isRulesOverlayVisible, setIsRulesOverlayVisible] = useBoolean();

    const onRulesButtonClick = useCallback(() => {
        AnalyticsService.sendLernGrammarEvent({action: 'learn_gram_rules_button_tapped'});
        setIsRulesOverlayVisible.on();
    }, [setIsRulesOverlayVisible]);

    if (!data || !isFetched || !topicId) {
        return <CenterSpinner />;
    }

    return (
        <>
            <div>
                <TrainingTitleButton onClick={onRulesButtonClick} size="xs" variant="ghost" rightIcon={<BookIcon />}>
                    <TrainingName />
                </TrainingTitleButton>
                <ProgressBarStyled value={progress} />
            </div>
            <CloseButton />
            {isRulesOverlayVisible && (
                <TopicRulesStoriesOverlay topicId={topicId} onClose={setIsRulesOverlayVisible.off} />
            )}
        </>
    );
};

export default memo(Header);
