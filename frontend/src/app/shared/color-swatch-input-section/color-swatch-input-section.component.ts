import {Component, Output, EventEmitter} from '@angular/core';
import {Color} from '../../classes/color';
import {FormGroup} from '@angular/forms';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddEditColorDialogComponent} from '../dialogs/add-edit-color-dialog/add-edit-color-dialog.component';
import {ToastrService} from 'ngx-toastr';
import {TinyColor} from '@ctrl/tinycolor';
import {SggComponent} from '../../sgg.component';

@Component({
  selector: 'sgg-color-swatch-input-section',
  templateUrl: './color-swatch-input-section.component.html'
})
export class ColorSwatchInputSectionComponent {
  @Output() success: EventEmitter<Color> = new EventEmitter<Color>();

  constructor(public app: SggComponent,
              private dialog: MatDialog,
              private toastrService: ToastrService) {
  }

  startAddingColor() {
    const config = new MatDialogConfig();

    config.viewContainerRef = this.app.vcRef;
    config.maxWidth = '100%';
    config.minWidth = '250px';
    config.data = {
      title: 'Add new color',
      color: null
    };

    const dialog = this.dialog.open(AddEditColorDialogComponent, config);

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
