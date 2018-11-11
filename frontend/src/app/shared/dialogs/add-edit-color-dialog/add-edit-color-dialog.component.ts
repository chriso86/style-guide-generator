import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Color} from '../../../classes/color';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'sgg-add-edit-color-dialog',
  templateUrl: './add-edit-color-dialog.component.html'
})
export class AddEditColorDialogComponent implements OnInit {
  form: FormGroup;
  color: Color = new Color('', '', '#ff0000');

  constructor(public dialogRef: MatDialogRef<AddEditColorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                title: string,
                color: Color
              }) {

    if (this.data.color && this.data.color.value) {
      Object.assign(this.color, this.data.color);
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      colorHexValue: new FormControl(''),
      colorLabel: new FormControl('', Validators.required),
      colorDescription: new FormControl('')
    });
  }
}
