import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Font} from '../../classes/font';
import {YesNoDialogComponent} from '../dialogs/yes-no-dialog/yes-no-dialog.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {AddEditFontTypeDialogComponent} from '../dialogs/add-edit-font-type-dialog/add-edit-font-type-dialog.component';

@Component({
  selector: 'sgg-font-type',
  templateUrl: './font-type.component.html',
  styleUrls: ['./font-type.component.scss']
})
export class FontTypeComponent {
  @Input() font: Font;

  @Output() delete: EventEmitter<Font> = new EventEmitter<Font>();
  @Output() edit: EventEmitter<Font> = new EventEmitter<Font>();

  fontSizeStep: number = 2;

  constructor(private snackBar: MatSnackBar,
              private dialog: MatDialog,
              private toastr: ToastrService) { }
  downloadFont() {

  }

  editFont() {
    const dialog = this.dialog.open(
      AddEditFontTypeDialogComponent,
      {
        data: {
          title: 'Edit font',
          color: this.font
        }
      });

    dialog.afterClosed().subscribe(result => {
      if (result.font) {
        this.edit.emit(result.font);

        this.toastr.success('Updated font');
      }
    });
  }

  deleteFont() {
    const message = 'Are you sure you would like to delete this font?\n\n' + this.font.label;

    const dialog = this.dialog.open(
      YesNoDialogComponent,
      {
        data: {
          title: 'Delete font?',
          message: message
        }
      });

    dialog.afterClosed().subscribe(result => {
      if (result) {
        this.delete.emit(this.font);

        this.toastr.success('Deleted font');
      }
    });
  }

  shiftFontSize(font, fontSizeStep: number) {
    let fontSize = +font.fontSize.replace('px', '');

    if ((fontSize < 10 && fontSizeStep < 0) || (fontSize > 70 && fontSizeStep > 0)) {
      return;
    }

    fontSize += fontSizeStep;

    font.fontSize = fontSize + 'px';
  }
}
