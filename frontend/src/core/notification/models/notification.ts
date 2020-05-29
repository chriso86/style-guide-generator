import {StringHelper} from '../../helpers/string';

export class SggNotification {
  public id: number = -1;
  public title: string;
  public body: string;
  public type: 'success' | 'info' | 'warning' | 'error';
  public timeout: number;

  private _uniqueCode: string;

  constructor(
    id: number,
    title: string,
    body: string,
    type: 'success' | 'info' | 'warning' | 'error' = 'info',
    timeout: number = 0
  ) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.type = type;
    this.timeout = timeout;

    this.setUniqueCode();
  }

  public isDuplicateOf(notification: SggNotification): boolean {
    return notification._uniqueCode === this._uniqueCode;
  }

  private setUniqueCode(): void {
    this._uniqueCode = StringHelper.getUniqueCode([this.title, this.body, this.type]);
  }
}
