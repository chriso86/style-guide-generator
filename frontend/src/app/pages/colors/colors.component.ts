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
  private _colorSwatches: Color[] = [
    new Color(
      'Blue',
      'Used for menu background, link colors, certain borders, and just anything else that your imagination could come up with',
      '#00adef',
      '$theme-color-blue'
    ),
    new Color(
      'Red',
      'Used for signs of danger and when there is imminent destruction upon the UI for any reason related to bad things in general',
      '#ff0000',
      '$theme-color-red'
    )
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.colorSwatches.next(this._colorSwatches);

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
