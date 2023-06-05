import {Nullable} from '@/lib/types';

export interface ChooseTopicStepState {
    step: 'choose-topic';
}

export interface StepsWithTopic {
    step: 'start' | 'training' | 'results';
    topicId: string;
}

export type State = Nullable<ChooseTopicStepState | StepsWithTopic>;
