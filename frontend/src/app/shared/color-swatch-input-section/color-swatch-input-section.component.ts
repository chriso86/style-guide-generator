import {Component, Output, EventEmitter} from '@angular/core';
import {Color} from '../../classes/color';
import {FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AddEditColorDialogComponent} from '../dialogs/add-edit-color-dialog/add-edit-color-dialog.component';
import {ToastrService} from 'ngx-toastr';
import { TinyColor } from '@ctrl/tinycolor';
import {ColorGroup} from '../../classes/colorGroup';
import {ColorHelper} from '../../helpers/colors';

@Component({
  selector: 'sgg-color-swatch-input-section',
  templateUrl: './color-swatch-input-section.component.html',
  styleUrls: ['./color-swatch-input-section.component.scss']
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

    dialog.afterClosed().subscribe((result: { color: Color, colorGroup: ColorGroup, form: FormGroup }) => {
      if (result.color) {
        result.color.tinyColor = new TinyColor(result.color.value);

        const groupFromHex = ColorHelper.getColorGroupFromHex(result.color.value);
        const groupFromRGB = ColorHelper.getColorGroupFromRGB([
            result.color.tinyColor.r,
            result.color.tinyColor.g,
            result.color.tinyColor.b
          ]);

        console.log(result.color.tinyColor.toName());

        result.color.group = groupFromHex ? groupFromHex : groupFromRGB;

        this.success.emit(result.color);

        this.toastrService.success('Added new color');
      }
    });
  }
}
