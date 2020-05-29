import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {SggGlobalErrorService} from './global-error.service';

@NgModule({
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    ErrorDialogComponent
  ],
  providers: [
    SggGlobalErrorService
  ]
})
export class SggErrorCoreModule {}
