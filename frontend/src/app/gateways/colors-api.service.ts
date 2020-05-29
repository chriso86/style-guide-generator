import {BaseApiService} from './base-api.service';
import {ColorsApiRequest} from '../classes/requests/colors-api.request';
import {Observable} from 'rxjs';
import {ColorsApiResponse} from '../classes/responses/colors-api.response';
import {Injectable} from '@angular/core';
import {Color} from '../classes/color';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class ColorsApiService extends BaseApiService {
  colorsApiBaseUri: string = 'http://www.thecolorapi.com/';
  colorsBaseUri: string = this.backendUri + 'colors/';

  getColorScheme(request: ColorsApiRequest): Observable<ColorsApiResponse> {
    const uri = this.colorsApiBaseUri + 'scheme';
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    return this.get<ColorsApiResponse>(uri, request, headers);
  }

  getColorInfo(request: ColorsApiRequest): Observable<ColorsApiResponse> {
    const uri = this.colorsApiBaseUri + 'id';
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    return this.get<ColorsApiResponse>(uri, request, headers);
  }

  getAll(projectId: string): Observable<Color[]> {
    const uri = this.colorsBaseUri;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);

    return this.get<Color[]>(uri, options, headers);
  }

  getOne(projectId: string, colorId: string): Observable<Color[]> {
    const uri = this.colorsBaseUri;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);
    options.set('colorId', colorId);

    return this.get<Color[]>(uri, options, headers);
  }

  create(projectId: string, color: Color) {
    const uri = this.colorsBaseUri;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);

    return this.post<{id: string}>(uri, color, headers);
  }

  update(projectId: string, colorId: string, color: Color) {
    const uri = this.colorsBaseUri;
    const options = new HttpParams();
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    options.set('projectId', projectId);
    options.set('colorId', colorId);

    return this.put<{id: string}>(uri, color, options, headers);
  }
}
