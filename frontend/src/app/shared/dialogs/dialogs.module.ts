import {NgModule} from '@angular/core';

import {ErrorDialogComponent} from './error-dialog/error-dialog.component';
import {AddEditColorDialogComponent} from './add-edit-color-dialog/add-edit-color-dialog.component';

import {SharedModule} from '../../shared.module';

// 3rd Party Dependencies
import { ColorPickerModule } from 'ngx-color-picker';
import {MaterialModule} from '../../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { YesNoDialogComponent } from './yes-no-dialog/yes-no-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    ColorPickerModule,
    MaterialModule,
    FlexLayoutModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    ErrorDialogComponent,
    AddEditColorDialogComponent,
    YesNoDialogComponent
  ],
  exports: [
    ErrorDialogComponent,
    AddEditColorDialogComponent,
    YesNoDialogComponent
  ],
  entryComponents: [
    ErrorDialogComponent,
    AddEditColorDialogComponent,
    YesNoDialogComponent
  ],
  providers: [
    ToastrService
  ]
})
export class DialogsModule { }
