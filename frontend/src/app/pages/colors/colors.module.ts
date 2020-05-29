import {NgModule} from '@angular/core';
import {ColorsComponent} from './colors.component';
import {AddEditColorDialogComponent} from './add-edit-color-dialog/add-edit-color-dialog.component';
import {ColorsRoutingModule} from './colors-routing.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {ColorSwatchComponent} from './color-swatch/color-swatch.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    ColorsRoutingModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ColorPickerModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule
  ],
  declarations: [
    ColorsComponent,
    AddEditColorDialogComponent,
    ColorSwatchComponent
  ]
})
export class ColorsModule {
}
