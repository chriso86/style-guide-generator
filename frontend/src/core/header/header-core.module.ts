import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    FlexLayoutModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SggHeaderCoreModule {}
