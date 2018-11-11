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
  MatButtonToggleModule, MatMenuModule,
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
    MatButtonToggleModule,
    MatMenuModule
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
    MatButtonToggleModule,
    MatMenuModule
  ],
  providers: []
})
export class MaterialModule { }
