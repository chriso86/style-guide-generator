import {Component, Host, Input} from '@angular/core';
import {Project} from '../../classes/project';
import {SggComponent} from '../../sgg.component';
import {MatDialog} from '@angular/material';
import {getDialogConfig} from '../../helpers/dialogs';
import {ConfirmationDialogComponent} from '../dialogs/confirmation-dialog/confirmation-dialog.component';
import {StringHelper} from '../../helpers/data';

@Component({
  selector: 'sgg-top-header',
  templateUrl: './top-header.component.html'
})
export class TopHeaderComponent {
  @Input() projects: Project[] = [];

  constructor(@Host() public app: SggComponent,
              private dialog: MatDialog) {
  }

  createNewProject() {
    const config = getDialogConfig();

    config.data = {
      title: 'Create a Project',
      project: null
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result.confirm) {
        color.label = response.name.value;
        color.variable = StringHelper.generateVariableFromName(response.name.value);

        this.addPrimaryColorToGroup(color);

        this.addColorToSwatches(color);
      }
    });
  }
}
