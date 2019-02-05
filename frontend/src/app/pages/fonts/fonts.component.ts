import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Font} from '../../classes/font';

@Component({
  selector: 'sgg-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {
  // Public vars
  fonts: BehaviorSubject<Font[]> = new BehaviorSubject<Font[]>([]);

  // Private vars
  private _fonts: Font[] = [];

  constructor() { }

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
