import {Component, Input, OnInit} from '@angular/core';
import {Font} from '../../classes/font';

@Component({
  selector: 'sgg-font-type',
  templateUrl: './font-type.component.html',
  styleUrls: ['./font-type.component.scss']
})
export class FontTypeComponent implements OnInit {
  @Input() font: Font;

  constructor() { }

  ngOnInit() {
  }

}
