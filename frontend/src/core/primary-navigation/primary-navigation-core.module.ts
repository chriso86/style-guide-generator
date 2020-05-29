import {PrimaryNavigationComponent} from './primary-navigation.component';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    PrimaryNavigationComponent
  ],
  imports: [
    MatSidenavModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    PrimaryNavigationComponent
  ]
})
export class SggPrimaryNavigationCoreModule {
}
