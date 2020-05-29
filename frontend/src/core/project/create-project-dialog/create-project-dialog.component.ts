import {Component, Inject, OnInit} from '@angular/core';
import {Project} from '../models/project';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'sgg-confirmation-dialog',
  templateUrl: './create-project-dialog.component.html'
})
export class CreateProjectDialogComponent {
  project: Project = new Project();

  constructor(public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                title: string,
                project: Project
              }) {

    if (this.data.project && this.data.project._id) {
      Object.assign(this.project, this.data.project); // TODO: Chris - Get rid of Object assign
    }
  }
}
