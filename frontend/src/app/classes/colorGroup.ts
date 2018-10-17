import {Color} from './color';

export class ColorGroup {
  name: string;
  hex: string;
  rgbTuple: number[];
  colors: Color[];

  constructor(name: string, hex: string, rgbTuple: number[], colors?: Color[]) {
    this.name = name;
    this.hex = hex;
    this.rgbTuple = rgbTuple;
    this.colors = colors || [];
  }

  addColor(color: Color) {
    this.colors.push(color);
  }

  removeColor(color: Color) {
    const index = this.colors.indexOf(color);

    if (index < 0) {
      throw new Error('No matching color found in the colors collection');
    }

    this.colors.splice(index, 1);
  }
}
