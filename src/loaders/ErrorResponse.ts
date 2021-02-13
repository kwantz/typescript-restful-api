import ErrorController from '@controllers/ErrorController';
import { Application } from 'express';

export default (app: Application): void => {
  const errorController = new ErrorController();
  app.use(errorController.handler);
};
