import {BaseApiService} from './base-api.service';
import {ColorsApiRequest} from '../../classes/requests/colors-api.request';
import {Observable} from 'rxjs';
import {ColorsApiResponse} from '../../classes/responses/colors-api.response';
import {Injectable} from '@angular/core';

@Injectable()
export class ColorsApiService extends BaseApiService {
  baseUri: string = 'http://www.thecolorapi.com/';

  getColorScheme(request: ColorsApiRequest): Observable<ColorsApiResponse> {
    const uri = this.baseUri + 'scheme';
    const headers = {
      'Access-Control-Allow-Origin': '*'
    };

    return this.get<ColorsApiResponse>(uri, request, headers);
  }
}
