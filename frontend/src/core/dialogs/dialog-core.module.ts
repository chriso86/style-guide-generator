import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {YesNoDialogComponent} from './yes-no-dialog/yes-no-dialog.component';

@NgModule({
  imports: [
    MatDialogModule
  ],
  declarations: [
    ConfirmationDialogComponent,
    YesNoDialogComponent
  ]
})
export class SggDialogCoreModule {}
