import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListeningItemPartModel } from '../../models/listening-item-part.model';

@Component({
  selector: 'app-listening-item-part',
  templateUrl: './listening-item-part.component.html',
  styleUrls: ['./listening-item-part.component.scss']
})
export class ListeningItemPartComponent implements OnInit {

  @Input()
  part: ListeningItemPartModel;

  @Output()
  partSelected: EventEmitter<ListeningItemPartModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }


  onClick() {
    this.partSelected.emit(this.part);
  }
}
