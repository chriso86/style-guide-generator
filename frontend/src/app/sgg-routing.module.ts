import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {FontsComponent} from './pages/fonts/fonts.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'colors',
    loadChildren: () => import('./pages/colors/colors.module').then(m => m.ColorsModule)
  },
  {
    path: 'fonts',
    loadChildren: () => import('./pages/fonts/fonts.module').then(m => m.FontsModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SggRoutingModule {}
