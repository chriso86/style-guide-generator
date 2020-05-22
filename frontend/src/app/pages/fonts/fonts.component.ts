import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Font} from '../../classes/font';
import {AddEditFontTypeDialogComponent} from '../../shared/dialogs/add-edit-font-type-dialog/add-edit-font-type-dialog.component';
import {FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {getDialogConfig} from '../../helpers/dialogs';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'sgg-fonts',
  templateUrl: './fonts.component.html'
})
export class FontsComponent implements OnInit {
  // Public vars
  fonts: BehaviorSubject<Font[]> = new BehaviorSubject<Font[]>([]);

  // Private vars
  private _fonts: Font[] = [];

  constructor(private dialog: MatDialog,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.fonts.next(this._fonts);

    this.fonts.subscribe(newColorSwatches => {
      this._fonts = newColorSwatches;
    });

    this._fonts.push(
      new Font('Arial', 'arial', 'A basic sans-serif font')
    );

    this.fonts.next(this._fonts);
  }

  addFont(font: Font): void {
    const conflicts = this.getFontConflicts(font);

    if (conflicts.hasValue) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    if (conflicts.hasLabel) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    this._fonts.push(font);

    this.fonts.next(this._fonts);
  }

  editFont(font: Font): void {
    this._fonts.forEach((existingFont: Font) => {
      if (existingFont.name === font.name) {
        Object.assign(existingFont, font);
      }
    });
  }

  deleteFont(font: Font): void {
    const index = this._fonts.findIndex((existingFont: Font) => {
      return existingFont.name === font.name;
    });

    this._fonts.splice(index, 1);

    this.fonts.next(this._fonts);
  }

  startAddingFont() {
    const config = getDialogConfig();

    config.data = {
      title: 'Add new font',
        font: null
    };

    const dialog = this.dialog.open(AddEditFontTypeDialogComponent, config);

    dialog.afterClosed().subscribe((result: { font: Font, form: FormGroup }) => {
      if (result.font) {
        this.addFont(result.font);

        this.toastrService.success('Added new font');
      }
    });
  }

  private getFontConflicts(font: Font) {
    let conflictedValue = false;
    let conflictedLabel = false;

    this._fonts.forEach((existingFont: Font) => {
      conflictedValue = font.name === existingFont.name && !conflictedValue;
      conflictedLabel = font.label === existingFont.label && !conflictedLabel;
    });

    return {
      hasValue: conflictedValue,
      hasLabel: conflictedLabel
    };
  }
}
