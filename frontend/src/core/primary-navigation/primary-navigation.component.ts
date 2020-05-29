import {Component, Host, OnInit} from '@angular/core';
import {SggComponent} from '../../app/sgg.component';
import {MenuStates} from './menu-states.enum';

@Component({
  selector: 'sgg-primary-navigation',
  templateUrl: './primary-navigation.component.html'
})
export class PrimaryNavigationComponent implements OnInit {
  mobileMenuState = MenuStates.over;
  desktopMenuState = MenuStates.top;

  constructor(@Host() public app: SggComponent) {
  }

  ngOnInit() {
  }

}
