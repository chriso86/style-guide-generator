import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'sgg-add-new-item',
  templateUrl: './add-new-item.component.html'
})
export class AddNewItemComponent {
  @Output() activate: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }
}
