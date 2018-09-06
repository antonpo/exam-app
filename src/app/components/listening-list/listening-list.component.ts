import { Component, OnInit } from '@angular/core';
import { ListeningService } from '../../services/listening.service';
import { ListeningItemModel } from '../../models/listening-item.model';
import { ListeningItemPartModel } from '../../models/listening-item-part.model';
import { ListeningItemPartQuestionModel, ListeningItemPartQuestionState } from '../../models/listening-item-part-question.model';

@Component({
  selector: 'app-listening-list',
  templateUrl: './listening-list.component.html',
  styleUrls: ['./listening-list.component.scss']
})
export class ListeningListComponent implements OnInit {

  listeningItems: ListeningItemModel[];

  constructor(private listeningService: ListeningService) {
    // this.listeningItems = [new ListeningItemModel(false, 'Title 1', 'Some test description 1', [
    //   new ListeningItemPartModel('Pat 1', [
    //     new ListeningItemPartQuestionModel(ListeningItemPartQuestionState.Correct),
    //     new ListeningItemPartQuestionModel(ListeningItemPartQuestionState.Incorrect),
    //     new ListeningItemPartQuestionModel(ListeningItemPartQuestionState.NotAnswered),
    //     new ListeningItemPartQuestionModel(ListeningItemPartQuestionState.NotAnswered),
    //   ]),
    //   new ListeningItemPartModel('Part 2', [
    //     new ListeningItemPartQuestionModel(ListeningItemPartQuestionState.NotAnswered),
    //     new ListeningItemPartQuestionModel(ListeningItemPartQuestionState.NotAnswered),
    //   ])
    // ]),
    // new ListeningItemModel(false, 'Title 2', 'Some test description 2', [])];
    // console.log(JSON.stringify(this.listeningItems, null, null));
  }

  ngOnInit() {
    this.listeningService.getAllListenings()
    .then(items => {
      console.log(items);
      this.listeningItems = items;
    })
    .catch((e) => console.error(e));
  }

  onItemSelected(item: ListeningItemModel) {
    console.log(item);
  }
}
