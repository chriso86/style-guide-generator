import {TinyColor} from '@ctrl/tinycolor';

export class Color {
  label: string = '';
  description: string = '';
  value: string = '';
  variable: string = '';
  tinyColor: TinyColor = null;

  constructor(label?: string, description?: string, value?: string, variable?: string, tinyColor?: TinyColor) {
    this.label = label;
    this.description = description;
    this.value = value;
    this.variable = variable;
    this.tinyColor = tinyColor;
  }
}
