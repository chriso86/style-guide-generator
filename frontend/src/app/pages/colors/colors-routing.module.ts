import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ColorsComponent} from './colors.component';
import {ColorsResolver} from './colors.resolver';

const routes: Routes = [
  {
    path: '',
    component: ColorsComponent,
    resolve: ColorsResolver
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
    ]
})
export class ColorsRoutingModule {
}
