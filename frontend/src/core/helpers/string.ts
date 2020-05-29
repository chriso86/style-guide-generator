import {CommonHelper} from './common';

export class StringHelper {
  static hasValue(value: any, emptyStringIsFalsy: boolean = true) {
    if (emptyStringIsFalsy) {
      return !CommonHelper.isNullOrUndefined(value) && value !== '';
    }

    return !CommonHelper.isNullOrUndefined(value) && (typeof value === 'string');
  }

  static generateVariableFromName(name: string): string {
    return name.toLowerCase().replace(' ', '-');
  }

  static getUniqueCode(codeParts: string[], snippedCodePartLength: number = 3) {
    return codeParts.reduce((uniqueCode: string, codePart: string) => {
      return uniqueCode += codePart.trim().replace(' ', '').toUpperCase().substr(0, snippedCodePartLength);
    });
  }
}
