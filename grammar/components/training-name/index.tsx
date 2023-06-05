import React, {memo} from 'react';

import CenterSpinner from '@/components/ui-kit/center-spinner';

import {useTrainingName} from '../../utils/use-training-name';

import {Component} from './types';

const TrainingName: Component = () => {
    const {title, isFetched} = useTrainingName();
    if (!isFetched) {
        return <CenterSpinner />;
    }
    return <>{title}</>;
};

export default memo(TrainingName);
