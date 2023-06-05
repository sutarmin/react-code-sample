import {Heading} from '@chakra-ui/react';
import styled from '@emotion/styled';

import {COLORS} from '@/components/ui-kit/consts';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const HeaderText = styled(Heading)`
    font-size: 24px;
    font-weight: bold;
    color: ${COLORS.black};
    text-align: center;
`;

export const AnimationWrapper = styled.div`
    width: 94px;
    height: 94px;
    display: flex;
    flex-direction: column;
`;
