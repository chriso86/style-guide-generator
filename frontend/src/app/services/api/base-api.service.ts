import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BaseResponse, JsonDataObject} from '../../classes/responses/base.response';
import {Observable, Observer} from 'rxjs';

@Injectable()
export class BaseApiService {

  constructor(private httpClient: HttpClient) {
  }

  get<T>(uri: string, params?: any, headers?: any): Observable<T> {
    // Error handling
    if (!uri) {

    }

    return Observable.create(
      (observer: Observer<any>) => {
        this.httpClient.get(uri, {
          headers: headers,
          params: params
        }).subscribe(
          (response: BaseResponse) => {
            const result = response.data || response || {};

            if (response.errors && response.errors.length) {
              // Handle errors
            }

            observer.next(result);
          },
          error => {
            // Add global error handling

            observer.error(error);
          }
        );
      });
  }

  post<T>(uri: string, data?: any, headers?: any): Observable<T> {
    // Error handling
    if (!uri) {

    }

    return Observable.create((observer: Observer<JsonDataObject | JsonDataObject[]>) => {
      this.httpClient.post(uri, data, {
        headers: headers
      }).subscribe(
        (response: BaseResponse) => {
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