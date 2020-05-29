import {CommonHelper} from './common';

export class NumberHelper {
  static hasValue(value: any, zeroIsFalsy: boolean = true) {
    if (zeroIsFalsy) {
      return !CommonHelper.isNullOrUndefined(value) && value;
    }

    return !CommonHelper.isNullOrUndefined(value) && !isNaN(value);
  }

  static getNextId(array: Array<any>, idPropertyName?: string) {
    if (!array.length) {
      return 1;
    }

    return array
      .map(item => idPropertyName ? item[idPropertyName] : item)
      .sort()
      .reverse()
      .shift() + 1;
  }
}
