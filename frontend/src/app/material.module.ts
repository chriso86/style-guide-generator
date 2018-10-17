import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonToggleModule,
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
    MatTooltipModule,
    MatButtonToggleModule
  ],
  exports: [
    MatFormFieldModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonToggleModule
  ],
  providers: []
})
export class MaterialModule { }
