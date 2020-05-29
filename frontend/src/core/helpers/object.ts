import {CommonHelper} from './common';

export class ObjectHelper {
  static hasValue(value: any) {
    return !CommonHelper.isNullOrUndefined(value);
  }
}
