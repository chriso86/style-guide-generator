import {JsonError} from '../json-error';

export class UnexpectedError extends JsonError {
  constructor(error: Error) {
    super();

    this.code = '0x000';
    this.detail = `
    Unexpected Error: ${error.name}
    Message: ${error.message}

    Stack: ${error.stack}
    `;
  }
}
