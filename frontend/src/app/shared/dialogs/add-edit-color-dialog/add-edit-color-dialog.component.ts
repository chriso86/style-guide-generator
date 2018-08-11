import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Color} from '../../../classes/color';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

interface AddEditData {
  title: string;
  confirm: Function;
  cancel: Function;
}

@Component({
  selector: 'sgg-add-edit-color-dialog',
  templateUrl: './add-edit-color-dialog.component.html',
  styleUrls: ['./add-edit-color-dialog.component.scss']
})
export class AddEditColorDialogComponent implements OnInit {
  form: FormGroup;
  color: Color;

  constructor(public dialogRef: MatDialogRef<AddEditColorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AddEditData) { }

  ngOnInit() {
    this.form = new FormGroup({
      colorHexValue: new FormControl('', Validators.required),
      colorLabel: new FormControl('', Validators.required),
      colorDescription: new FormControl('')
    });

    this.color = new Color();
  }

  confirmColor() {
    this.data.confirm(this.color);

    this.dialogRef.close();
  }

  cancelColor() {
    this.data.cancel(this.color);

    this.dialogRef.close();
  }
}
