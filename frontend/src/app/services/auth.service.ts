import {Injectable} from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }
}
