export class Error {
  code: number = 0;
  message: string = '';

  constructor(code: number | string, message: string) {
    if (typeof code === 'string') {
      this.code = Number(code);
    } else {
      this.code = code;
    }

    this.message = message;
  }
}
