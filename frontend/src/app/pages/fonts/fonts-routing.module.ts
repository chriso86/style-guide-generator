import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FontsComponent} from './fonts.component';
import {FontsResolver} from './fonts.resolver';

const routes: Routes = [
  {
    path: '',
    component: FontsComponent,
    resolve: FontsResolver
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
