import WebResponse from '@models/WebResponse';

export default interface ErrorMiddleware {
  handler(err: Error): WebResponse;
}
