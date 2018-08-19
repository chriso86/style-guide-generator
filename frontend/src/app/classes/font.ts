export class Font {
  label: string;
  name: string;
  description: string;
  fontSize: string = '36px';

  constructor(label?: string, name?: string, description?: string) {
    this.label = label;
    this.name = name;
    this.description = description;
  }
}
