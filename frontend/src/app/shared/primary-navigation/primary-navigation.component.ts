import {Component, Host, OnInit} from '@angular/core';
import {SggComponent} from '../../sgg.component';

@Component({
  selector: 'sgg-primary-navigation',
  templateUrl: './primary-navigation.component.html'
})
export class PrimaryNavigationComponent implements OnInit {
  constructor(@Host() public app: SggComponent) {
  }

  ngOnInit() {
  }

}
