import {Text} from '@chakra-ui/react';
import styled from '@emotion/styled';

import {BREAKPOINTS, FONTS} from '@/components/ui-kit/consts';

export const GrammarChooseTopicScrollWrapper = styled.div`
    height: calc(100vh - 80px);
    width: 100%;
    overflow: auto;
    padding: 48px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${BREAKPOINTS.mobile}) {
        padding: 20px 4px;
    }
`;

export const GrammarChooseTopicCenterWrapper = styled.div``;

export const Title = styled(Text)`
    ${FONTS.headline2}
`;

export const MobileHeader = styled.div`
    padding-left: 4px;
    height: 44px;
    display: flex;
    align-items: center;
`;
