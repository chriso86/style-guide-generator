import {TinyColor} from '@ctrl/tinycolor';
import {ColorGroup} from './colorGroup';

export class Color {
  label: string = '';
  description: string = '';
  value: string = '';
  variable: string = '';
  tinyColor: TinyColor = null;
  group: ColorGroup;

  constructor(label?: string, description?: string, value?: string, variable?: string, tinyColor?: TinyColor, group?: ColorGroup) {
    this.label = label;
    this.description = description;
    this.value = value;
    this.variable = variable;
    this.tinyColor = tinyColor;
    this.group = group;
  }
}
