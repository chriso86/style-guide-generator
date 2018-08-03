import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SggComponent } from './sgg.component';
import { ColorSwatchComponent } from './shared/color-swatch/color-swatch.component';
import { FontTypeComponent } from './shared/font-type/font-type.component';
import { ColorSwatchInputSectionComponent } from './shared/color-swatch-input-section/color-swatch-input-section.component';
import { TopHeaderComponent } from './shared/top-header/top-header.component';
import { PrimaryNavigationComponent } from './shared/primary-navigation/primary-navigation.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './sgg.routes';
import { HomeComponent } from './pages/home/home.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { FontsComponent } from './pages/fonts/fonts.component';
import { FooterComponent } from './shared/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
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
    FooterComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Material Design Modules
    MatFormFieldModule,
    MatSidenavModule,
    // Routing Modules
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [SggComponent]
})
export class SggModule { }
