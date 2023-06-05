import {all, put, call, select, takeLatest} from 'typed-redux-saga';

import {TrainingGrammarAPI} from '@/lib/api/training/grammar/index';
import {GrammarFinishItem} from '@/lib/api/training/grammar/types';
import {pureActions as currentPageActions} from '@/modules/trainings/grammar/store/current-page';
import {pureActions as currentStepActions} from '@/modules/trainings/grammar/store/current-step';
import {pureActions as resultsActions} from '@/modules/trainings/grammar/store/results';
import {selectResults} from '@/modules/trainings/grammar/store/results/selectors';

import {GrammarTrainingStepResult} from '../results/types';

import {grammarTrainingPageSelector} from './selectors';

function makeEmptyProgressItem(id: number) {
    return {
        id,
        mechanics: [],
    };
}

function mapResults(results: GrammarTrainingStepResult[]): GrammarFinishItem[] {
    return results.reduce((progress, stepResult) => {
        let sentenceProgress = progress.find(({id}) => id === stepResult.sentenceId);
        if (!sentenceProgress) {
            sentenceProgress = makeEmptyProgressItem(stepResult.sentenceId);
            progress.push(sentenceProgress);
        }
        sentenceProgress.mechanics.push({
            mechanic: stepResult.mechanic,
            status: stepResult.result,
        });
        return progress;
    }, [] as GrammarFinishItem[]);
}

function* handleSendResults() {
    const page = yield * select(grammarTrainingPageSelector);
    if (page?.step === 'choose-topic') {
        return;
    }
    const results = yield * select(selectResults);
    const progress = mapResults(results);
    yield * call(TrainingGrammarAPI.finish, {progress, tense: page?.topicId});
}

function* handleResetTraining() {
    yield * put(resultsActions.reset());
    yield * put(currentStepActions.reset());
}

export function* run() {
    yield * all([
        yield * takeLatest(currentPageActions.showResultsPage, handleSendResults),
        yield * takeLatest(currentPageActions.reset, handleResetTraining),
    ]);
}
