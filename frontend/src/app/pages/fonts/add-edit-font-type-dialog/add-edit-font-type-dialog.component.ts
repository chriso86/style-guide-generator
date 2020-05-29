import {Component, Inject} from '@angular/core';
import {Font} from '../models/font';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'sgg-add-edit-font-type-dialog',
  templateUrl: './add-edit-font-type-dialog.component.html'
})
export class AddEditFontTypeDialogComponent {
  font: Font = new Font('', '', '');

  constructor(public dialogRef: MatDialogRef<AddEditFontTypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                title: string,
                font: Font
              }) {

    if (this.data.font && this.data.font.name) {
      Object.assign(this.font, this.data.font); // TODO: Chris - Get rid of Object assign
    }
  }
}
