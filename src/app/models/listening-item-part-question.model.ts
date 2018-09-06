
export enum ListeningItemPartQuestionState { NotAnswered, Correct, Incorrect }

export class ListeningItemPartQuestionModel {
    public state: ListeningItemPartQuestionState;

    constructor(state: ListeningItemPartQuestionState) {
        this.state = state;
    }
}
