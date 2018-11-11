import {Component, Output, EventEmitter} from '@angular/core';
import {Color} from '../../classes/color';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AddEditColorDialogComponent} from '../dialogs/add-edit-color-dialog/add-edit-color-dialog.component';
import {ToastrService} from 'ngx-toastr';
import { TinyColor } from '@ctrl/tinycolor';

@Component({
  selector: 'sgg-color-swatch-input-section',
  templateUrl: './color-swatch-input-section.component.html'
})
export class ColorSwatchInputSectionComponent {
  @Output() success: EventEmitter<Color> = new EventEmitter<Color>();

  constructor(private dialog: MatDialog,
              private toastrService: ToastrService) { }

  startAddingColor() {
    const dialog = this.dialog.open(
      AddEditColorDialogComponent,
      {
        data: {
          title: 'Add new color',
          color: null
        }
      });

    dialog.afterClosed().subscribe((result: { color: Color, form: FormGroup }) => {
      if (result.color) {
        result.color.tinyColor = new TinyColor(result.color.value);

        console.log(result.color.tinyColor.toName());

        this.success.emit(result.color);

        this.toastrService.success('Added new color');
      }
    });
  }
}
