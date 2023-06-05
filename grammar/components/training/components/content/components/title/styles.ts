import {Text} from '@chakra-ui/react';
import styled from '@emotion/styled';

import {COLORS} from '@/components/ui-kit/consts';

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const TitleContainer = styled(Text)`
    color: ${COLORS.black};
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`;

export const WordsContainer = styled.div`
    color: ${COLORS.primary};
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
`;
