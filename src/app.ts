// tslint:disable:ordered-imports

import 'module-alias/register';
import 'reflect-metadata';

import containers from '@configs/containers';
import TYPES from '@configs/types';
import ErrorResponse from '@loaders/ErrorResponse';
import Loader from '@loaders/index';
import Logger from '@utils/Logger';
import '@configs/sequelize';
import '@controllers/HealthController';
import '@controllers/ProductController';
import { InversifyExpressServer } from 'inversify-express-utils';

const logger = containers.get<Logger>(TYPES.Logger);

const server = new InversifyExpressServer(containers);
server.setConfig(Loader(logger));
server.setErrorConfig(ErrorResponse);

const app = server.build();
app.listen(3000, () => logger.info('Running in port', 3000));

export default app;
