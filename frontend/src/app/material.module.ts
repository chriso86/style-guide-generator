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
  MatMenuModule,
  MatSelectModule
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
    MatMenuModule,
    MatSelectModule
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
    MatMenuModule,
    MatSelectModule
  ],
  providers: []
})
export class MaterialModule { }
