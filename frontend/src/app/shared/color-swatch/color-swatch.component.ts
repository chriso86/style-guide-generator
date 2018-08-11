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
      const textArea = document.createElement('textarea');
      const message = 'Copied ' + this.color.variable;

      textArea.value = this.color.variable;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('Copy', false, null);

      textArea.remove();

      this.snackBar.open(message, 'Got it!', {duration: 3000});
    }
  }
}
