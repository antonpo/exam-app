import { ListeningItemPartQuestionModel } from './listening-item-part-question.model';

export class ListeningItemPartModel {
    public title: string;
    public questions: ListeningItemPartQuestionModel[];

    constructor(title: string, questions: ListeningItemPartQuestionModel[]) {
        this.title = title;
        this.questions = questions;
    }
}
