import {Component, ViewContainerRef} from '@angular/core';
import {MenuStates} from './enums/menu-states.enum';

@Component({
  selector: 'app-root',
  templateUrl: './sgg.component.html',
  styleUrls: ['./sgg.component.scss']
})
export class SggComponent {
  title = 'style-guide-generator';
  projectName = '';
  menuOptions = {
    menuIsOpen: true,
    mode: MenuStates.over
  };

  constructor(public vcRef: ViewContainerRef) {
    // Set initial menu options
    this.reassignMenuOptions();

    // Set menu options on resize
    window.onresize = () => {
      this.reassignMenuOptions();
    };
  }

  private reassignMenuOptions() {
    const breakpoint = 480;

    this.menuOptions.menuIsOpen = window.innerWidth > breakpoint;
    this.menuOptions.mode = window.innerWidth > breakpoint
      ? MenuStates.top
      : MenuStates.over;
  }
}
