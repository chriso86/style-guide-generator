import {ErrorHandler, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from '../notification/notification.service';

@Injectable()
export class SggGlobalErrorService implements ErrorHandler {
  constructor(
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  public handleError(error: any) {
    const httpErrorCode = error.httpErrorCode;

    // Return if it's an HTTP error - The HTTP interceptor will handle HTTP errors
    if (httpErrorCode) {
      return;
    }

    this.showError(error.title, error.message);
  }

  private showError(title: string, body: string) {
    this.notificationService.addError(title, body);

    console.error(body);
  }
}
