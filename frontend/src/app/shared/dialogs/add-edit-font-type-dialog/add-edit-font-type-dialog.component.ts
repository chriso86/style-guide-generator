import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Font} from '../../../classes/font';

@Component({
  selector: 'sgg-add-edit-font-type-dialog',
  templateUrl: './add-edit-font-type-dialog.component.html'
})
export class AddEditFontTypeDialogComponent implements OnInit {
  form: FormGroup;
  font: Font = new Font('', '', '');

  constructor(public dialogRef: MatDialogRef<AddEditFontTypeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                title: string,
                font: Font
              }) {

    if (this.data.font && this.data.font.name) {
      Object.assign(this.font, this.data.font);
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      fontLabel: new FormControl('', Validators.required),
      fontName: new FormControl('', Validators.required),
      fontDescription: new FormControl('')
    });
  }
}
