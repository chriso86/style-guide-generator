import {NgModule} from '@angular/core';

import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {AddEditColorDialogComponent} from './add-edit-color-dialog/add-edit-color-dialog.component';

import {SharedModule} from '../../shared.module';

// 3rd Party Dependencies
import { ColorPickerModule } from 'ngx-color-picker';
import {MaterialModule} from '../../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FontTypeInputSectionComponent } from '../font-type-input-section/font-type-input-section.component';
import { AddEditFontTypeDialogComponent } from './add-edit-font-type-dialog/add-edit-font-type-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    ColorPickerModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ErrorDialogComponent,
    AddEditColorDialogComponent,
    AddEditFontTypeDialogComponent
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
