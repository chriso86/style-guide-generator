import {HomeComponent} from './pages/home/home.component';
import {ColorsComponent} from './pages/colors/colors.component';
import {FontsComponent} from './pages/fonts/fonts.component';
import { SpacingComponent } from './pages/spacing/spacing.component';
import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'fonts', component: FontsComponent },
  { path: 'spacing', component: SpacingComponent },
  { path: '', redirectTo: '/colors', pathMatch: 'full' },
  { path: '**', component: ColorsComponent }
];
