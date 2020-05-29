import {CommonHelper} from './common';

export class BooleanHelper {
  static hasValue(value: any, nullUndefinedIsFalsy: boolean = true) {
    if (nullUndefinedIsFalsy) {
      return !!value;
    }

    return (typeof value === 'boolean') && value && !CommonHelper.isNullOrUndefined(value);
  }
}
