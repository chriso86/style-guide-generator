import {CommonHelper} from './common';

export class ArrayHelper {
  hasValue(value: Array<any>, emptyIsTrue: boolean = true) {
    return !CommonHelper.isNullOrUndefined(value)
      && (emptyIsTrue ? value.length > 0 : emptyIsTrue);
  }
}
