import {JsonError} from '../errors/json-error';

export interface BaseResponse<T> {
  data: T;
  errors: JsonError[];
}
