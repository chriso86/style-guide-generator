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
import {ROUTES} from './sgg.routes';
import { HomeComponent } from './pages/home/home.component';
import { ColorsComponent } from './pages/colors/colors.component';
import { FontsComponent } from './pages/fonts/fonts.component';
import { SpacingComponent } from './pages/spacing/spacing.component';
import { FooterComponent } from './shared/footer/footer.component';
import {DialogsModule} from './shared/dialogs/dialogs.module';
import {MaterialModule} from './material.module';
import {SharedModule} from './shared.module';
import {FontTypeInputSectionComponent} from './shared/font-type-input-section/font-type-input-section.component';
import {ColorsApiService} from './services/api/colors-api.service';
import {BaseApiService} from './services/api/base-api.service';
import {HttpClient} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    // Angular Modules
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // Flex Layout Modules
    FlexLayoutModule,
    // Material Design Modules
    MaterialModule,
    // Local Modules
    DialogsModule,
    // Routing Modules
    RouterModule.forRoot(ROUTES, {useHash: true})
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
    SpacingComponent,
    FooterComponent,
    FontTypeInputSectionComponent
  ],
  providers: [
    BaseApiService,
    ColorsApiService
  ],
  bootstrap: [SggComponent]
})
export class SggModule { }
