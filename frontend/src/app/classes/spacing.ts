export class Spacing {
  label: string = '';
  name: string = '';
  description: string = '';
  value: string = '';
  variable: string = '';

  constructor(label?: string, description?: string, value?: string, variable?: string) {
    this.label = label;
    this.description = description;
    this.value = value;
    this.variable = variable;
  }
}
