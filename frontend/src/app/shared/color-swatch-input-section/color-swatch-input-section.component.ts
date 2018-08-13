import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
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
  @Output() success: EventEmitter<Color> = new EventEmitter<Color>();

  constructor(private dialog: MatDialog) { }

  ngOnInit() {

  }

  startAddingColor() {
    const dialog = this.dialog.open(
      AddEditColorDialogComponent,
      {
        data: {
          title: 'Add new color',
          color: new Color()
        }
      });

      dialog.afterClosed() .subscribe(result => {
        if (result) {
          this.success.emit(result);
        }
      });
      
  }
}
