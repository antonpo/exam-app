import { Component, OnInit, Input, } from '@angular/core';
import { ListeningItemModel } from '../../models/listening-item.model';

@Component({
  selector: 'app-listening-item',
  templateUrl: './listening-item.component.html',
  styleUrls: ['./listening-item.component.scss']
})
export class ListeningItemComponent implements OnInit {

  showed = false;

  @Input()
  item: ListeningItemModel;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.showed = !this.showed;
  }

  onPart() {
    return null;
  }
}
