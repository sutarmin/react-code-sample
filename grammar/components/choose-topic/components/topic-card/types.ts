import {FC} from 'react';

export type Props = {
    id: string;
    title: string;
    subtitle: string;
    pictureUrl: string;
    onClick: (id: string) => void;
};

export type Component = FC<Props>;
