import {NgModule} from '@angular/core';
import {FontsComponent} from './fonts.component';
import {AddEditFontTypeDialogComponent} from './add-edit-font-type-dialog/add-edit-font-type-dialog.component';
import {FontTypeComponent} from './font-type/font-type.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {SggProjectCoreModule} from '../../../core/project/project-core.module';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    SggProjectCoreModule,
    MatTooltipModule
  ],
  declarations: [
    FontsComponent,
    FontTypeComponent,
    AddEditFontTypeDialogComponent
  ]
})
export class FontsModule {
}
