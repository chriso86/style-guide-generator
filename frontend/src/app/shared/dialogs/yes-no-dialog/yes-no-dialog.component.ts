import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'sgg-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html'
})
export class YesNoDialogComponent {
  constructor(public dialogRef: MatDialogRef<YesNoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                title: string,
                message: string
              }) {}
}
