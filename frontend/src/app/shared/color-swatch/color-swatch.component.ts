import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../../classes/color';

@Component({
  selector: 'sgg-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.scss']
})
export class ColorSwatchComponent implements OnInit {
  @Input() color: Color;

  constructor() { }

  ngOnInit() {
  }

}
