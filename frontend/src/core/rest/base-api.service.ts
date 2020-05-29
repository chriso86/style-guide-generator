import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BaseResponse} from './base.response';
import {Observable, Observer} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseApiService {
  constructor(private httpClient: HttpClient) {
  }

  public get<T>(
    uriFunction: string,
    params?: any,
    headers?: HttpHeaders
  ): Observable<T> {
    // Error handling
    if (!uriFunction) {

    }

    return new Observable(
      (observer: Observer<T>) => {
        this.httpClient.get(uriFunction, {
          params: params,
          headers: headers
        }).subscribe(
          (response: BaseResponse<T>) => {
            // @ts-ignore
            if (response.errors && response.errors.length) {
              // Handle errors
            }

            observer.next(response.data);
          },
          error => {
            // Add global error handling

            observer.error(error);
          }
        );
      });
  }

  public post<T>(
    uriFunction: string,
    data?: any,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    // Error handling
    if (!uriFunction) {

    }

    return new Observable((observer: Observer<T>) => {
      this.httpClient.post(uriFunction, data, {
        params: params,
        headers: headers
      }).subscribe(
        (response: BaseResponse<T>) => {
          // @ts-ignore
          if (response.errors && response.errors.length) {
            // Handle errors
          }

          observer.next(response.data);
        },
        error => {
          // Add global error handling

          observer.error(error);
        }
      );
    });
  }

  public put<T>(
    uriFunction: string,
    data?: any,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    // Error handling
    if (!uriFunction) {

    }

    return new Observable<T>((observer: Observer<T>) => {
      this.httpClient.put(uriFunction, data, {
        params: params,
        headers: headers
      }).pipe(
        tap((response: BaseResponse<T>) => {
            // @ts-ignore
            if (response.errors && response.errors.length) {
              // Handle errors
            }

            observer.next(response.data);
          },
          error => {
            // Add global error handling

            observer.error(error);
          })
      );
    });
  }

  public delete<T>(
    uriFunction: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<T> {
    // Error handling
    if (!uriFunction) {

    }

    return new Observable((observer: Observer<T>) => {
      this.httpClient.delete(uriFunction, {
        params: params,
        headers: headers
      }).subscribe(
        (response: BaseResponse<T>) => {
          // @ts-ignore
          if (response.errors && response.errors.length) {
            // Handle errors
          }

          observer.next(response.data);
        },
        error => {
          // Add global error handling

          observer.error(error);
        }
      );
    });
  }
}
