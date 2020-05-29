export class CommonHelper {
  static isNullOrUndefined(value: Array<any> | Object | String | Number | Boolean) {
    return value === null || (typeof value === 'undefined');
  }
}
