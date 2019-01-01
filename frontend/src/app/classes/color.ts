import {TinyColor} from '@ctrl/tinycolor';

export class Color {
  label: string = '';
  description: string = '';
  value: string = '';
  variable: string = '';
  tinyColor: TinyColor = null;
  isPrimary: boolean = false;
  parentColor: string = '';
  groupName: string;

  constructor(
    label?: string,
    description?: string,
    value?: string,
    variable?: string,
    tinyColor?: TinyColor,
    isPrimary?: boolean,
    parentColor?: string
  ) {
    this.label = label;
    this.description = description;
    this.value = value;
    this.variable = variable;
    this.tinyColor = tinyColor;
    this.isPrimary = isPrimary;
    this.parentColor = parentColor;
  }
}
