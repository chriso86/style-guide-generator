import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../../classes/color';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AddEditColorDialogComponent} from '../dialogs/add-edit-color-dialog/add-edit-color-dialog.component';

@Component({
  selector: 'sgg-color-swatch-input-section',
  templateUrl: './color-swatch-input-section.component.html',
  styleUrls: ['./color-swatch-input-section.component.scss']
})
export class ColorSwatchInputSectionComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  startAddingColor() {
    this.dialog.open(
      AddEditColorDialogComponent,
      {
        data: {
          title: 'Add new color',
          color: new Color(),
          confirm: this.confirmAddColor,
          cancel: this.cancelAddColor
        }
      });
  }

  confirmAddColor() {
    console.log('Adding');
  }

  cancelAddColor() {
    console.log('cancelling');
  }
}
