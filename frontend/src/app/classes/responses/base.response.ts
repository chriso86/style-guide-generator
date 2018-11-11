import {Error} from '../error';

export interface BaseResponse {
  data: JsonDataObject | JsonDataObject[];
  errors: Error[];
}

export class JsonDataObject {
  // Required
  id: number;
  type: string;

  // Optional
  attributes?: any = {};
  relationships?: any = {};

  constructor(id: number, type: string, attributes?: any, relationships?: any) {
    this.id             = id;
    this.type           = type;
    this.attributes     = this.attributes || attributes;
    this.relationships  = this.relationships || relationships;
  }
}
