import { Component, OnInit } from '@angular/core';
import {Color} from '../../classes/color';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'sgg-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  // Public vars
  colorSwatches: BehaviorSubject<Color[]> = new BehaviorSubject<Color[]>([]);

  // Private vars
  private _colorSwatches: Color[] = [];

  constructor() { }

  ngOnInit() {
    this.colorSwatches.next(this._colorSwatches);

    this.colorSwatches.subscribe(newColorSwatches => {
      this._colorSwatches = newColorSwatches;
    });

    this._colorSwatches.push(
      new Color('Steel Blue', 'Menu item primary font, primary action button background, action button icons', '#4682b4', '$theme-color-steelblue')
    );

    this.colorSwatches.next(this._colorSwatches);
  }

  addColor(color: Color): void {
    const conflicts = this.getColorConflicts(color);

    if (conflicts.hasValue) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    if (conflicts.hasLabel) {
      // TODO: Jay - Set up errors plumbing (Advanced)

      return;
    }

    this._colorSwatches.push(color);

    this.colorSwatches.next(this._colorSwatches);
  }

  editColor(color: Color): void {
    this._colorSwatches.forEach((colorSwatch: Color) => {
      if (colorSwatch.value === color.value) {
        Object.assign(colorSwatch, color);
      }
    });
  }

  deleteColor(color: Color): void {
    const index = this._colorSwatches.findIndex((colorSwatch: Color) => {
      return colorSwatch.value === color.value;
    });

    this._colorSwatches.splice(index, 1);

    this.colorSwatches.next(this._colorSwatches);
  }

  private getColorConflicts(color: Color) {
    let conflictedValue = false;
    let conflictedLabel = false;

    this._colorSwatches.forEach((existingColor: Color) => {
      conflictedValue = color.value === existingColor.value && !conflictedValue;
      conflictedLabel = color.label === existingColor.label && !conflictedLabel;
    });

    return {
      hasValue: conflictedValue,
      hasLabel: conflictedLabel
    };
  }
}
