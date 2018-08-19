// Angular Dependencies
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

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
import {DialogsModule} from './shared/dialogs/dialogs.module';
import {MaterialModule} from './material.module';
import {SharedModule} from './shared.module';
import {FontTypeInputSectionComponent} from './shared/font-type-input-section/font-type-input-section.component';

@NgModule({
  imports: [
    // Angular Modules
    SharedModule,
    // Flex Layout Modules
    FlexLayoutModule,
    // Material Design Modules
    MaterialModule,
    // Local Modules
    DialogsModule,
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
    FontTypeInputSectionComponent
  ],
  bootstrap: [SggComponent]
})
export class SggModule { }
