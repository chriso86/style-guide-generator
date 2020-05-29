import {Component, Inject} from '@angular/core';
import {Error} from '../../../classes/error';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'sgg-error-dialog',
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Error) {}
}
