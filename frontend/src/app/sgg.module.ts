// Angular Dependencies
import {NgModule} from '@angular/core';
// Project Dependencies
import {SggComponent} from './sgg.component';
import {HomeComponent} from './pages/home/home.component';
import {FontsComponent} from './pages/fonts/fonts.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SggRoutingModule} from './sgg-routing.module';
import {SggDialogCoreModule} from '../core/dialogs/dialog-core.module';
import {SggErrorCoreModule} from '../core/errors/error-core.module';
import {SggApiCoreModule} from '../core/rest/api-core.module';
import {SggAuthCoreModule} from '../core/auth/auth-core.module';
import {SggFooterCoreModule} from '../core/footer/footer-core.module';
import {SggLoaderCoreModule} from '../core/loader/loader.module';
import {SggNotificationCoreModule} from '../core/notification/notification-core.module';
import {SggPrimaryNavigationCoreModule} from '../core/primary-navigation/primary-navigation-core.module';
import {SggProjectCoreModule} from '../core/project/project-core.module';
import {SggHeaderCoreModule} from '../core/header/header-core.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    ToastrModule.forRoot(), // TODO: Chris - Move toastr to core toastr service

    // Angular Modules
    BrowserAnimationsModule,
    FlexLayoutModule,

    // Material Design
    MatIconModule,

    // SGG Core Modules
    SggAuthCoreModule,
    SggDialogCoreModule,
    SggErrorCoreModule,
    SggFooterCoreModule,
    SggLoaderCoreModule,
    SggNotificationCoreModule,
    SggPrimaryNavigationCoreModule,
    SggProjectCoreModule,
    SggApiCoreModule,
    SggHeaderCoreModule,

    // Routing Modules
    SggRoutingModule
  ],
  declarations: [
    SggComponent,
    HomeComponent
  ],
  bootstrap: [SggComponent]
})
export class SggModule {
}
