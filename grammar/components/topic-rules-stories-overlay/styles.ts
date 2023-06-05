import styled from '@emotion/styled';

import Stories from '@/components/stories';
import {BREAKPOINTS} from '@/components/ui-kit/consts';

export const OverlayWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background: rgba(55, 56, 60, 0.85);
    backdrop-filter: blur(5px);

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const OverlayContent = styled.div`
    position: relative;
    width: 316px;
    height: 560px;
    flex-shrink: 0;

    @media (max-width: ${BREAKPOINTS.mobile}) {
        width: 100%;
        height: 100%;
    }
`;

export const StoriesStyled = styled(Stories)``;
