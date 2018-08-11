import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../../classes/color';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'sgg-color-swatch-input-section',
  templateUrl: './color-swatch-input-section.component.html',
  styleUrls: ['./color-swatch-input-section.component.scss']
})
export class ColorSwatchInputSectionComponent implements OnInit {
  form: FormGroup;
  color: Color;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      colorHexValue: new FormControl('', Validators.required),
      colorLabel: new FormControl('', Validators.required),
      colorDescription: new FormControl('')
    });

    this.color = new Color('red', 'A red color', '#ff0000');
  }

  confirmAddColor() {

  }

  cancelAddColor() {

  }
}
