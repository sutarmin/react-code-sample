import {boundActionsFabric as stepsActionFabric} from '@/modules/trainings/grammar/store/current-step';
import {boundActionsFabric as resultsActionFabric} from '@/modules/trainings/grammar/store/results';
import {GrammarTrainingStepResult} from '@/modules/trainings/grammar/store/results/types';

export function handleSaveAnswer(answer: GrammarTrainingStepResult) {
    resultsActionFabric().add(answer);
    stepsActionFabric().next();
}
