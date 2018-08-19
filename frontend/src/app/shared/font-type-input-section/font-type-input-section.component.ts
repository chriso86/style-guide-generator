import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ToastrService} from 'ngx-toastr';
import {FormGroup} from '@angular/forms';
import {Font} from '../../classes/font';
import {AddEditFontTypeDialogComponent} from '../dialogs/add-edit-font-type-dialog/add-edit-font-type-dialog.component';

@Component({
  selector: 'sgg-font-type-input-section',
  templateUrl: './font-type-input-section.component.html',
  styleUrls: ['./font-type-input-section.component.scss']
})
export class FontTypeInputSectionComponent {
  @Output() success: EventEmitter<Font> = new EventEmitter<Font>();

  constructor(private dialog: MatDialog,
              private toastrService: ToastrService) { }

  startAddingFont() {
    const dialog = this.dialog.open(
      AddEditFontTypeDialogComponent,
      {
        data: {
          title: 'Add new font',
          font: null
        }
      });

    dialog.afterClosed().subscribe((result: { font: Font, form: FormGroup }) => {
      if (result.font) {
        this.success.emit(result.font);

        this.toastrService.success('Added new font');
      }
    });
  }
}
