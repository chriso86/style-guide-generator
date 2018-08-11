import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Color} from '../../classes/color';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'sgg-color-swatch',
  templateUrl: './color-swatch.component.html',
  styleUrls: ['./color-swatch.component.scss']
})
export class ColorSwatchComponent implements OnInit {
  @Input() color: Color;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  selectVariableName() {
    if (this.color.variable) {
      const variable = document.getElementById('colorVariable');
      const textArea = document.createElement('textarea');

      textArea.value = variable.textContent;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('Copy', false, null);

      textArea.remove();

      this.snackBar.open('Copied Color Variable');
    }
  }
}
