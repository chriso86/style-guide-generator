import {JsonError} from '../json-error';

export class ApplicationError extends JsonError {
  constructor(error: Error) {
    super();

    this.code = '0x000';
    this.detail = `
    Application Error: ${error.name}
    Message: ${error.message}

    Stack: ${error.stack}
    `;
  }
}
