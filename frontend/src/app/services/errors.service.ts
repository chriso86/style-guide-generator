import {ErrorHandler, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UNAUTHORIZED, BAD_REQUEST, FORBIDDEN} from 'http-status-codes';
import {take} from 'rxjs/operators';

@Injectable()
export class ErrorsService implements ErrorHandler {
  static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = 'An error occurred: Please click this message to refresh';
  static readonly DEFAULT_ERROR_TITLE: string = 'Something went wrong';

  constructor(private router: Router, private toastr: ToastrService) {
  }

  public handleError(error: any) {
    const httpErrorCode = error.httpErrorCode;

    switch (httpErrorCode) {
      case UNAUTHORIZED:
        this.router.navigateByUrl('/login');
        break;
      case FORBIDDEN:
        this.router.navigateByUrl('/unauthorized');
        break;
      case BAD_REQUEST:
        this.showError(error.message);
        break;
      default:
        this.showError(ErrorsService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
    }
  }

  private showError(message: string) {
    this.toastr.error(
      message,
      ErrorsService.DEFAULT_ERROR_TITLE,
      {
        tapToDismiss: true,
        disableTimeOut: true
      }
    ).onTap
      .pipe(take(1))
      .subscribe((toast: any) => {
        console.log(toast);

        this.toastr.remove(toast);
        window.location.reload();
      });
  }
}
