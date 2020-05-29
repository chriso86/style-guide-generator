import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Color} from '../models/color';
import { AddEditColorDialogComponent } from '../add-edit-color-dialog/add-edit-color-dialog.component';
import { YesNoDialogComponent } from '../../../../core/dialogs/yes-no-dialog/yes-no-dialog.component';
import { ToastrService } from 'ngx-toastr';
import {MAT_TOOLTIP_DEFAULT_OPTIONS} from '@angular/material/tooltip';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {confirmationTooltipDefaults} from '../../../../core/dialogs/confirmation-dialog/default-settings';

@Component({
  selector: 'sgg-color-swatch',
  templateUrl: './color-swatch.component.html',
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: confirmationTooltipDefaults}
  ]
})
export class ColorSwatchComponent {
  @Input() color: Color;

  @Output() delete: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() edit: EventEmitter<Color> = new EventEmitter<Color>();

  @Output() generateAnalogous: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() generateAnalogousComplimentary: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() generateComplementary: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() generateMonochromatic: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() generateMonochromaticDark: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() generateMonochromaticLight: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() generateTriadic: EventEmitter<Color> = new EventEmitter<Color>();
  @Output() generateQuadratic: EventEmitter<Color> = new EventEmitter<Color>();

  constructor(private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private toastr: ToastrService) { }

  selectVariableName() {
    if (this.color.variable) {
      const textArea = document.createElement('textarea');

      textArea.value = this.color.variable;
      document.body.appendChild(textArea);

      textArea.select();
      document.execCommand('Copy', false, null);

      textArea.remove();
    }
  }

  editColor() {
    const dialog = this.dialog.open(
      AddEditColorDialogComponent,
      {
        data: {
          title: 'Edit color',
          color: this.color
        }
      });

    dialog.afterClosed().subscribe(result => {
      if (result.color) {
        this.edit.emit(result.color);

        this.toastr.success('Updated color');
      }
    });
  }

  deleteColor() {
    const message = 'Are you sure you would like to delete this color?\n\n' + this.color.label;

    const dialog = this.dialog.open(
      YesNoDialogComponent,
      {
        data: {
          title: 'Delete color?',
          message: message
        }
      });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.delete.emit(this.color);

        this.toastr.success('Deleted color');
      }
    });
  }
}
