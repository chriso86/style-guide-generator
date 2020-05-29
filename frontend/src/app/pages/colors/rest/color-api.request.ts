import {TinyColor} from '@ctrl/tinycolor';
import {BooleanHelper} from '../../../../core/helpers/boolean';

export class ColorApiRequest {
  // (optional) Example: 0047AB - Valid hex code
  hex?: string;

  // (optional) Example: 0,71,171 - Valid rgb color, also rgb(0,71,171)
  rgb?: string;

  // (optional) Example: 215,100%,34% - Valid hsl color, also hsl(215,100%,34%)
  hsl?: string;

  // (optional) Example: 100,58,0,33 - Valid cmyk color, also cmyk(100,58,0,33)
  // NOT IMPLEMENTED
  cmyk?: string;

  // Base color object
  color: TinyColor;

  // (optional) Default: json Example: html - Return results as JSON§, SVG or HTML page of results, Choices: json html svg
  format?: string;

  // (optional) Default: monochrome Example: analogic - Define mode by which to generate the scheme from the seed color
  // Choices: monochrome monochrome-dark monochrome-light analogic complement analogic-complement triad quad
  mode?: string;

  // (optional) Default: 5 Example: 6 - Number of colors to return
  count?: number;

  w?: number; // (optional) Default: 100 Example: 350 - Height of resulting image, only applicable on SVG format

  // (optional) Default: true Example: false - Whether to print the color names on resulting image, only applicable on SVG format
  named?: boolean;

  constructor(
    color: TinyColor = new TinyColor('#000000'),
    mode: string = 'monochrome',
    format: string = 'json',
    count: number = 5,
    w: number = 100,
    named: boolean = true
  ) {
    this.hex = this.hex || color.toHex();
    this.rgb = this.rgb || this.formatRgb(color.toRgb());
    this.hsl = this.hsl || this.formatHsl(color.toHsl());
    this.format = this.format || format;
    this.mode = this.mode || mode;
    this.count = this.count || count;
    this.w = w || this.w;
    this.named = BooleanHelper.hasValue(named, false)
      ? named
      : this.named;
  }

  private formatRgb(rgb): string {
    return `${rgb.r},${rgb.g},${rgb.b}`;
  }

  private formatHsl(hsl): string {
    return `${hsl.h},${(hsl.s * 100)}%,${(hsl.l * 100)}%`;
  }
}
