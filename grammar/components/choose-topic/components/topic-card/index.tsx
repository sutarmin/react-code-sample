import React, {memo, useCallback} from 'react';

import {TopicCardWrapper, Title, Subtitle, StyledNextImage} from './styles';
import {Component} from './types';

const TopicCard: Component = ({id, title, subtitle, pictureUrl, onClick}) => {
    const handleClick = useCallback(() => onClick(id), [id, onClick]);

    return (
        <TopicCardWrapper onClick={handleClick}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <StyledNextImage src={pictureUrl} width={112} height={112} alt="" />
        </TopicCardWrapper>
    );
};

export default memo(TopicCard);
