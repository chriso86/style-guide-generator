import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Font} from './models/font';

@Injectable()
export class FontsResolver implements Resolve<Font[]> {
  constructor() {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Font[]> {
    return new Observable(() => {}); // TODO: Chris - Implement
  }
}
