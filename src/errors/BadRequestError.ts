export default class BadRequestError extends Error {
  validateError: Array<string>;

  constructor(message: Array<string>) {
    super(message.join('\n'));
    this.validateError = message;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}
