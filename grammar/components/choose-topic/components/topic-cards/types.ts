import {FC} from 'react';

export type Props = {
    onSelectTopic: (topicId: string) => void;
};

export type Component = FC<Props>;
