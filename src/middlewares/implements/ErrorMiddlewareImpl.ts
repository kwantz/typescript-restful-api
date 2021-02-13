import ErrorMiddleware from '@middlewares/ErrorMiddleware';
import WebResponse from '@models/WebResponse';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export default class ErrorMiddlewareImpl implements ErrorMiddleware {
  public handler(err: Error): WebResponse {
    switch (err.constructor.name) {
      case 'UnauthorizedError':
        return this.unauthorizedHandler();
      case 'BadRequestError':
        return this.badRequestHandler();
      case 'NotFoundError':
        return this.notFoundHandler();
      default:
        return this.internalServerHandler();
    }
  }

  private unauthorizedHandler(): WebResponse {
    return {
      code: 401,
      status: 'UNAUTHORIZED',
      data: 'Please put your Authorization header',
    };
  }

  private badRequestHandler(): WebResponse {
    return {
      code: 400,
      status: 'BAD REQUEST',
      data: 'Bad Request',
    };
  }

  private notFoundHandler(): WebResponse {
    return {
      code: 404,
      status: 'NOT FOUND',
      data: 'Not Found',
    };
  }

  private internalServerHandler(): WebResponse {
    return {
      code: 500,
      status: 'INTERNAL SERVER ERROR',
      data: 'Internal Server Error',
    };
  }
}
