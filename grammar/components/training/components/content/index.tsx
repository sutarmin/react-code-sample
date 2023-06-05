import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {selectCurrentStepData} from '@/modules/trainings/grammar/store/selectors';

import Header from '../header';

import GrammarMechanicTitle from './components/title';
import {GrammarWrapper, TitleContainer, ActionsContainer} from './styles';
import {Component} from './types';
import {handleSaveAnswer} from './utils';

const Content: Component = () => {
    const {mechanic, sentence} = useSelector(selectCurrentStepData);

    const title = useMemo(() => {
        if (!mechanic) {
            return null;
        }

        return <GrammarMechanicTitle title={mechanic.title} taskText={mechanic.getTaskTitle(sentence)} />;
    }, [mechanic, sentence]);

    const mechanicActions = useMemo(() => {
        if (!mechanic) {
            return null;
        }

        const {mechanic: Mechanic, validator} = mechanic;

        return (
            <Mechanic
                sentence={sentence}
                validator={validator}
                handleCheckAnswer={handleSaveAnswer}
            />
        );
    }, [mechanic, sentence]);

    return (
        <GrammarWrapper>
            <Header />
            <TitleContainer>{title}</TitleContainer>

            <ActionsContainer>{mechanicActions}</ActionsContainer>
        </GrammarWrapper>
    );
};

export default Content;
