// Angular Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatSidenavModule, MatSnackBarModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// 3rd Party Dependencies
import { ColorPickerModule } from 'ngx-color-picker';

// Project Dependencies
import { SggComponent } from './sgg.component';
import { ColorSwatchComponent } from './shared/color-swatch/color-swatch.component';
import { FontTypeComponent } from './shared/font-type/font-type.component';
import { ColorSwatchInputSectionComponent } from './shared/color-swatch-input-section/color-swatch-input-section.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { PrimaryNavigationComponent } from './shared/primary-navigation/primary-navigation.component';
import { ROUTES } from './sgg.routes';
import { HomeComponent } from './pages/home/home.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { FontsComponent } from './pages/fonts/fonts.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ErrorDialogComponent } from './shared/dialogs/error-dialog/error-dialog.component';
import { AddEditColorDialogComponent } from './shared/dialogs/add-edit-color-dialog/add-edit-color-dialog.component';

@NgModule({
  imports: [
    // Angular Modules
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Flex Layout Modules
    FlexLayoutModule,
    // Material Design Modules
    MatFormFieldModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    // 3rd Party
    ColorPickerModule,
    // Routing Modules
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    SggComponent,
    ColorSwatchComponent,
    FontTypeComponent,
    ColorSwatchInputSectionComponent,
    TopHeaderComponent,
    PrimaryNavigationComponent,
    HomeComponent,
    ColorsComponent,
    FontsComponent,
    FooterComponent,
    ErrorDialogComponent,
    AddEditColorDialogComponent
  ],
  providers: [],
  bootstrap: [SggComponent]
})
export class SggModule { }
