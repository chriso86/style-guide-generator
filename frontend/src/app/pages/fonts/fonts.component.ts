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
  private _fonts: Font[] = [
    new Font('Arial', 'arial', 'A basic sans-serif font')
  ];

  constructor() { }

  ngOnInit() {
    this.fonts.next(this._fonts);

    this.fonts.subscribe(newFonts => {
      this._fonts = newFonts;
    });
  }

  addFont(font: Font): void {
    if (this.returnExistingFont(font)) {
      // this.dialog.open()
    }

    this._fonts.push(font);

    this.fonts.next(this._fonts);
  }

  editFont(color: Font): void {

  }

  private returnExistingFont(font: Font) {
    return this._fonts.find((existingFont: Font) => {
      return font.name === existingFont.name;
    });
  }
}
