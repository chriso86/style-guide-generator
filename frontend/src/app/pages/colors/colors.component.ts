import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Color} from '../../classes/color';
import {BehaviorSubject} from 'rxjs';
import {ColorGroup} from '../../classes/colorGroup';
import {ColorHelper} from '../../helpers/colors';
import {MatButtonToggleGroup} from '@angular/material';

@Component({
  selector: 'sgg-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  // Public vars
  colorSwatches: BehaviorSubject<Color[]> = new BehaviorSubject<Color[]>([]);
  colorGroups: BehaviorSubject<ColorGroup[]> = new BehaviorSubject<ColorGroup[]>([]);

  // Private vars
  private _colorGroups: ColorGroup[] = [];
  private _colorSwatches: Color[] = [];

  constructor() { }

  ngOnInit() {
    // Initialize data set listeners
    this.colorSwatches.next(this._colorSwatches);
    this.colorGroups.next(this._colorGroups);

    this.colorSwatches.subscribe(newColorSwatches => {
      this._colorSwatches = newColorSwatches;
    });
    this.colorGroups.subscribe(newColorGroups => {
      this._colorGroups = newColorGroups;
    });
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

    if (color.group) {
      const existingGroup = this._colorGroups.find(group => group.name === color.group.name);

      this.addColorToColorGroup(existingGroup, color);
    }
  }

  editColor(color: Color): void {
    this._colorSwatches.forEach((colorSwatch: Color) => {
      if (colorSwatch.value === color.value) {
        Object.assign(colorSwatch, color);
      }
    });
  }

  deleteColor(color: Color): void {
    this.deleteColorFromColorGroup(color.group, color);
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

  // Generate color palettes
  generateTetradicPalette(paletteType: string): void {

  }

  generateComplimentary(color) {

  }

  generateMonochromatic() {

  }

  generateAnalogous() {

  }

  generateSplitComplimentary() {

  }

  generateTriadic() {

  }

  generateTetradic() {

  }

  // Private functions
  private addColorToSwatches(color: Color) {
    this._colorSwatches.push(color);

    this.colorSwatches.next(this._colorSwatches);

    return color;
  }

  private deleteColorFromSwatches(color: Color) {
    const index = this._colorSwatches.findIndex(colorSwatch => colorSwatch.value === color.value);

    if (index < 0) {
      return;
    }

    this._colorSwatches.splice(index, 1);
    this.deleteColorFromColorGroup(color.group, color);

    this.colorSwatches.next(this._colorSwatches);
  }

  private addColorGroup(group: ColorGroup) {
    const groupToAdd = ColorHelper.colorGroups.find(g => g.name === group.name);

    this._colorGroups.push(groupToAdd);

    this.colorGroups.next(this._colorGroups);

    return group;
  }

  private deleteColorGroup(group: ColorGroup) {
    const index = this._colorGroups.findIndex(colorGroup => colorGroup.name === group.name);

    if (index < 0) {
      return;
    }

    this._colorGroups.splice(index, 1);

    this.colorGroups.next(this._colorGroups);
  }

  private addColorToColorGroup(group: ColorGroup, color: Color) {
    // First add color group to model if doesn't exist
    if (!group) {
      group = this.addColorGroup(color.group);
    }

    // Then add color to group (group and model)
    color.group = group; // Update reference on color object to correct object
    group.addColor(color);

    this.addColorToSwatches(color);

    this.colorGroups.next(this._colorGroups);
  }

  private deleteColorFromColorGroup(group: ColorGroup, color: Color) {
    // First remove color from group
    const index = group.colors.findIndex(c => c.value === color.value);

    if (index < 0) {
      return;
    }

    group.colors.splice(index, 1);
    this.deleteColorFromSwatches(color);

    this.colorGroups.next(this._colorGroups);

    // Then remove group if it has no other colors in it
    if (!group.colors.length) {
      this.deleteColorGroup(group);
    }
  }
}
