import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule, MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports: [
    MatFormFieldModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule
  ],
  providers: []
})
export class MaterialModule { }
