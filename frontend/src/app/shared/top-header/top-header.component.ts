import {Component, Host, Input} from '@angular/core';
import {Project} from '../../classes/project';
import {SggComponent} from '../../sgg.component';
import {MatDialog, MatSelectChange} from '@angular/material';
import {getDialogConfig} from '../../helpers/dialogs';
import {CreateProjectDialogComponent} from '../dialogs/create-project-dialog/create-project-dialog.component';
import {FormGroup} from '@angular/forms';

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

    const dialogRef = this.dialog.open(CreateProjectDialogComponent, config);

    dialogRef.afterClosed().subscribe((result: { project: Project, form: FormGroup }) => {
      if (result.project) {
        if (!result.project._id) {
          this.createProject(result.project);
        }

        // Or update
      }
    });
  }

  createProject(project: Project) {
    // Projects API Create
  }
}
