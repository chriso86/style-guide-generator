import {Color} from './color';

export class ColorGroup {
  title: string;
  colorSwatches: Color[];

  constructor(title: string, colorSwatches: Color[]) {
    this.title = title || 'No group title assigned';
    this.colorSwatches = colorSwatches || [];
  }
}
