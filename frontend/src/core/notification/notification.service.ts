import {Injectable} from '@angular/core';
import {SggNotification} from './models/notification';
import {CommonHelper} from '../helpers/common';
import {NumberHelper} from '../helpers/number';

@Injectable()
export class NotificationService {
  public notifications: SggNotification[] = [];


  // Public methods
  public addSuccess(title: string, body: string): SggNotification {
    return this.addMessageOfType(title, body, 'success');
  }

  public addInfo(title: string, body: string): SggNotification {
    return this.addMessageOfType(title, body, 'info');
  }

  public addWarning(title: string, body: string): SggNotification {
    return this.addMessageOfType(title, body, 'warning');
  }

  public addError(title: string, body: string): SggNotification {
    return this.addMessageOfType(title, body, 'error');
  }

  public clearSuccesses() {
    this.clearMessagesOfType('success');
  }

  public clearInfos() {
    this.clearMessagesOfType('info');
  }

  public clearWarnings() {
    this.clearMessagesOfType('warning');
  }

  public clearErrors() {
    this.clearMessagesOfType('error');
  }

  public clearAllErrors() {
    this.notifications.length = 0;
  }


  // Private methods
  private addMessageOfType(
    title: string,
    body: string,
    type: 'success' | 'info' | 'warning' | 'error'
  ): SggNotification {
    const nextId = NumberHelper.getNextId(this.notifications, 'id');
    const notification = new SggNotification(
      nextId,
      title,
      body,
      type
    );

    if (!this.hasDuplicate(notification)) {
      this.notifications.push(notification);
    }

    return notification;
  }

  private clearMessagesOfType(type: 'success' | 'info' | 'warning' | 'error') {
    const successIndexes: number[] = this.notifications
      .map((notification: SggNotification, index: number) => {
        return notification.type === type ? index : null;
      })
      .filter((index: number) => CommonHelper.isNullOrUndefined(index))
      .reverse();

    if (successIndexes.length) {
      successIndexes.forEach((index: number) => {
        this.notifications.splice(index, 1);
      });
    }
  }

  private hasDuplicate(notificationToTest: SggNotification) {
    let hasDuplicate = false;

    this.notifications.forEach((notification: SggNotification) => {
      if (!hasDuplicate) {
        hasDuplicate = notification.isDuplicateOf(notificationToTest);
      }
    });

    return hasDuplicate;
  }
}
