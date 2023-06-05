import {Text} from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';

import {BREAKPOINTS, FONTS, COLORS} from '@/components/ui-kit/consts';

export const TopicCardWrapper = styled.div`
    position: relative;
    width: 282px;
    height: 160px;
    padding: 16px;
    background-color: ${COLORS.white};

    box-shadow: 0px 4px 10px 1px rgba(193, 193, 193, 0.2);
    border-radius: 16px;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    @media (max-width: ${BREAKPOINTS.mobile}) {
        width: 100%;
    }
`;

export const Title = styled(Text)`
    ${FONTS.body2}
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Subtitle = styled(Text)`
    display: block;
    max-width: 160px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: ${COLORS.additionalGray};
    margin-top: 4px;
`;

export const StyledNextImage = styled(Image)`
    position: absolute;
    bottom: 0;
    right: 0;
`;
