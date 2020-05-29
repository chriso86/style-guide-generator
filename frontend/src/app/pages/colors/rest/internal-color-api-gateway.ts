import {BaseApiService} from '../../../../core/rest/base-api.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Color} from '../models/color';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class InternalColorApiGateway {
  public url: string = 'https://us-central1-girder-backend.cloudfunctions.net/api/';

  constructor(private baseApiService: BaseApiService) {
  }

  getAll(projectId: string): Observable<Color[]> {
    const uri = this.url;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);

    return this.baseApiService.get<Color[]>(uri, options, headers);
  }

  getOne(projectId: string, colorId: string): Observable<Color[]> {
    const uri = this.url;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);
    options.set('colorId', colorId);

    return this.baseApiService.get<Color[]>(uri, options, headers);
  }

  create(projectId: string, color: Color) {
    const uri = this.url;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);

    return this.baseApiService.post<{id: string}>(uri, color, null, headers);
  }

  update(projectId: string, colorId: string, color: Color) {
    const uri = this.url;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);
    options.set('colorId', colorId);

    return this.baseApiService.put<{id: string}>(uri, color, options, headers);
  }
}
