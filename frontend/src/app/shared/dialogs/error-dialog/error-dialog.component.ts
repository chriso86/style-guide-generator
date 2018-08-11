import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Error} from '../../../classes/error';

@Component({
  selector: 'sgg-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Error) {}
}
