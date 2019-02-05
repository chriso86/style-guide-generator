import {NgModule} from '@angular/core';

import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {AddEditColorDialogComponent} from './add-edit-color-dialog/add-edit-color-dialog.component';

import {SharedModule} from '../../shared.module';

// 3rd Party Dependencies
import { ColorPickerModule } from 'ngx-color-picker';
import {MaterialModule} from '../../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AddEditFontTypeDialogComponent } from './add-edit-font-type-dialog/add-edit-font-type-dialog.component';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';
import {AuthService} from '../../services/auth.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {CreateProjectDialogComponent} from './create-project-dialog/create-project-dialog.component';

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
    AddEditFontTypeDialogComponent,
    YesNoDialogComponent,
    ConfirmationDialogComponent,
    CreateProjectDialogComponent
  ],
  exports: [
    ErrorDialogComponent,
    AddEditColorDialogComponent,
    AddEditFontTypeDialogComponent,
    YesNoDialogComponent,
    ConfirmationDialogComponent,
    CreateProjectDialogComponent
  ],
  entryComponents: [
    ErrorDialogComponent,
    AddEditColorDialogComponent,
    AddEditFontTypeDialogComponent,
    YesNoDialogComponent,
    ConfirmationDialogComponent,
    CreateProjectDialogComponent
  ],
  providers: [
    AuthService
  ]
})
export class DialogsModule { }
