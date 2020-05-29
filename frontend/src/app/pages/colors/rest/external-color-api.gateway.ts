import {BaseApiService} from '../../../../core/rest/base-api.service';
import {ColorApiRequest} from './color-api.request';
import {Observable} from 'rxjs';
import {ColorApiResponse} from './color-api.response';
import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class ExternalColorApiGateway {
  colorsApiBaseUri: string = 'http://www.thecolorapi.com/';

  constructor(private baseApiService: BaseApiService) {
  }

  getColorScheme(request: ColorApiRequest): Observable<ColorApiResponse> {
    const uri = this.colorsApiBaseUri + 'scheme';
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    return this.baseApiService.get<ColorApiResponse>(uri, request, headers);
  }

  getColorInfo(request: ColorApiRequest): Observable<ColorApiResponse> {
    const uri = this.colorsApiBaseUri + 'id';
    const headers = new HttpHeaders();

    headers.set('Access-Control-Allow-Origin', '*');

    return this.baseApiService.get<ColorApiResponse>(uri, request, headers);
  }
}
