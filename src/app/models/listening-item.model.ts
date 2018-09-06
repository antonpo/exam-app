import { ListeningItemPartModel } from './listening-item-part.model';

export class ListeningItemModel {
    public isNew: boolean;
    public title: string;
    public description: string;
    public parts: ListeningItemPartModel[];

    constructor(isNew: boolean, title: string, description: string, parts: ListeningItemPartModel[]) {
        this.isNew = isNew;
        this.title = title;
        this.description = description;
        this.parts = parts;
    }
}
