import {Component, Inject} from '@angular/core';
import {JsonError} from '../json-error';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'sgg-error-dialog',
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: JsonError) {}
}
