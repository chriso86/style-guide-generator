import {Component, Host, Input} from '@angular/core';
import {Project} from '../../classes/project';
import {SggComponent} from '../../sgg.component';
import {MatDialog, MatSelectChange} from '@angular/material';
import {getDialogConfig} from '../../helpers/dialogs';
import {ConfirmationDialogComponent} from '../dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'sgg-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent {
  @Input() projects: Project[] = [];

  constructor(@Host() public app: SggComponent,
              private dialog: MatDialog) {
  }

  loadProject(event: MatSelectChange) {
    const config = getDialogConfig();
    const projectId = parseInt(event.value, 10);

    // Id positive ID, load existing project
    if (projectId > -1) {
      
    }

    // Load Create new project dialog
    config.data = {
      title: 'Create a Project',
      project: null
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result.confirm) {

      }
    });
  }
}
