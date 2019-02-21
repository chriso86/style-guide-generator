import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Font} from '../../../classes/font';
import {Project} from '../../../classes/project';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Color} from '../../../classes/color';

@Component({
  selector: 'sgg-confirmation-dialog',
  templateUrl: './create-project-dialog.component.html'
})
export class CreateProjectDialogComponent implements OnInit {
  form: FormGroup;
  project: Project = new Project();

  constructor(public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                title: string,
                project: Project
              }) {

    if (this.data.project && this.data.project._id) {
      Object.assign(this.project, this.data.project);
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      projectName: new FormControl('', Validators.required)
    });
  }
}
