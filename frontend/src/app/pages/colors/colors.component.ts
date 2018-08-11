import { Component, OnInit } from '@angular/core';
import {Color} from '../../classes/color';
import {BehaviorSubject} from 'rxjs';
import {MatDialog} from '@angular/material';

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

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.colorSwatches.subscribe(newColorSwatches => {
      this._colorSwatches = newColorSwatches;
    });
  }

  addColor(color: Color): void {
    if (this.returnExistingColor(color)) {
      // this.dialog.open()
    }

    this._colorSwatches.push(color);

    this.colorSwatches.next(this._colorSwatches);
  }

  editColor(color: Color): void {

  }

  private returnExistingColor(color: Color) {
    return this._colorSwatches.find((existingColor: Color) => {
      return color.value === existingColor.value;
    });
  }
}
