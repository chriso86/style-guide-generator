import {NgModule} from '@angular/core';

import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {AddEditColorDialogComponent} from './add-edit-color-dialog/add-edit-color-dialog.component';

import {SharedModule} from '../../shared.module';

// 3rd Party Dependencies
import { ColorPickerModule } from 'ngx-color-picker';
import {MaterialModule} from '../../material.module';

@NgModule({
  imports: [
    SharedModule,
    ColorPickerModule,
    MaterialModule
  ],
  declarations: [
    ErrorDialogComponent,
    AddEditColorDialogComponent
  ],
  exports: [
    ErrorDialogComponent,
    AddEditColorDialogComponent
  ],
  entryComponents: [
    ErrorDialogComponent,
    AddEditColorDialogComponent
  ]
})
export class DialogsModule { }
