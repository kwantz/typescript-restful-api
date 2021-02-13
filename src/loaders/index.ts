import BodyParser from '@loaders/BodyParser';
import Cors from '@loaders/Cors';
import Helmet from '@loaders/Helmet';
import Morgan from '@loaders/Morgan';
import Logger from '@utils/Logger';
import { Application } from 'express';

export default (logger: Logger) => {
  return (app: Application): void => {
    Cors(app);
    Helmet(app);
    BodyParser(app);
    Morgan(logger)(app);
  };
};
