// Angular Dependencies
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

// 3rd Party Dependencies
import { ColorPickerModule } from 'ngx-color-picker';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  exports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    ToastrModule
  ],
  providers: [
    ToastrService
  ]
})
export class SharedModule {
}
