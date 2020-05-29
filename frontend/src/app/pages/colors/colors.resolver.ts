import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Color} from './models/color';
import {Observable} from 'rxjs';

@Injectable()
export class ColorsResolver implements Resolve<Color[]> {
  constructor() {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Color[]> {
    return new Observable(() => {}); // TODO: Chris - Implement
  }
}
