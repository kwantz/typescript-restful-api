import BadRequestError from '@errors/BadRequestError';
import NotFoundError from '@errors/NotFoundError';
import UnauthorizedError from '@errors/UnauthorizedError';
import WebResponse from '@models/WebResponse';
import { NextFunction, Request, Response } from 'express';

export default class ErrorController {
  public handler = (
    err: NotFoundError,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const webResponse: WebResponse = this.getWebResponse(err);
    res.status(webResponse.code).send(webResponse);
  };

  public getWebResponse(err: Error): WebResponse {
    switch (err.constructor) {
      case UnauthorizedError:
        return this.unauthorizedHandler();
      case BadRequestError:
        return this.badRequestHandler(err as BadRequestError);
      case NotFoundError:
        return this.notFoundHandler(err as NotFoundError);
      default:
        return this.internalServerHandler(err);
    }
  }

  private unauthorizedHandler(): WebResponse {
    return {
      code: 401,
      status: 'UNAUTHORIZED',
      data: 'Please put your Authorization header',
    };
  }

  private badRequestHandler(err: BadRequestError): WebResponse {
    return {
      code: 400,
      status: 'BAD REQUEST',
      data: err.validateError,
    };
  }

  private notFoundHandler(err: NotFoundError): WebResponse {
    return {
      code: 404,
      status: 'NOT FOUND',
      data: err.message,
    };
  }

  private internalServerHandler(err: Error): WebResponse {
    console.error(err);
    return {
      code: 500,
      status: 'INTERNAL SERVER ERROR',
      data: 'Internal Server Error',
    };
  }
}
