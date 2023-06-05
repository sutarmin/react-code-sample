import {Button} from '@chakra-ui/react';
import styled from '@emotion/styled';

import {FONTS} from '@/components/ui-kit/consts';
import ProgressBar from '@/modules/trainings/common/progress-bar';

export const TrainingTitleButton = styled(Button)`
    ${FONTS.caption2}
`;

export const ProgressBarStyled = styled(ProgressBar)`
    margin-top: 8px;
`;
