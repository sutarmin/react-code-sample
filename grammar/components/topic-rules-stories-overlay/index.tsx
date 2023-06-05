import React, {memo, useCallback, useMemo} from 'react';

import StoriesBlockComponent from '@/components/stories/components/stories-block';
import {useStoriesBlockProps} from '@/components/stories/hooks/use-stories-block-handlers';
import CenterSpinner from '@/components/ui-kit/center-spinner';
import Text from '@/components/text';
import {useConfig} from '@/lib/queries/configs/useConfig';
import type {StoriesBlock} from '@/lib/types/stories';
import {CONFIG_NAMES} from '@/lib/utils/configs/consts';

import {OverlayWrapper, OverlayContent} from './styles';
import {Component, GrammarRulesConfig} from './types';

const TopicRulesStoriesOverlay: Component = ({topicId, onClose, onAction, onFinish}) => {
    const {data, isFetched} = useConfig<GrammarRulesConfig>(CONFIG_NAMES['BACKEND-PY3_TRAINING_GRAMMAR-RULES']);

    const props = useStoriesBlockProps();

    const blocks: StoriesBlock[] = useMemo(() => {
        if (!data?.content?.[topicId]) {
            return [];
        }

        return [
            {
                img: '',
                altText: '',
                title: '',
                stories: data.content[topicId].map((item) => ({
                    img: item,
                    altText: '',
                })),
            },
        ];
    }, [data, topicId]);

    const onActionButtonClick = useCallback(() => {
        onClose();
        onAction?.();
    }, [onClose, onAction]);

    const actionButtonContent = useMemo(() => {
        return <Text id="grammar/rules/action-button" />
    }, []);

    if (!data || !isFetched) {
        return (
            <OverlayWrapper>
                <CenterSpinner />
            </OverlayWrapper>
        );
    }

    return (
        <OverlayWrapper>
            <OverlayContent>
                <StoriesBlockComponent
                    images={blocks[0].stories}
                    title={blocks[0].title}
                    storiesBlocks={blocks}
                    handleClose={onClose}
                    onActionButtonClick={onActionButtonClick}
                    onShowFinish={onFinish}
                    actionButtonContent={actionButtonContent}
                    {...props}
                />
            </OverlayContent>
        </OverlayWrapper>
    );
};

export default memo(TopicRulesStoriesOverlay);
