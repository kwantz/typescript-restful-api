import TYPES from '@configs/types';
import ErrorMiddleware from '@middlewares/ErrorMiddleware';
import ErrorMiddlewareImpl from '@middlewares/implements/ErrorMiddlewareImpl';
import ProductRepositoryImpl from '@repositories/implements/ProductRepositoryImpl';
import ProductRepository from '@repositories/ProductRepository';
import HealthService from '@services/HealthService';
import HealthServiceImpl from '@services/implements/HealthServiceImpl';
import ProductServiceImpl from '@services/implements/ProductServiceImpl';
import ProductService from '@services/ProductService';
import JoiValidator from '@utils/implements/JoiValidator';
import WinstonLogger from '@utils/implements/WinstonLogger';
import Logger from '@utils/Logger';
import Validator from '@utils/Validator';
import { Container } from 'inversify';

const container = new Container();
container.bind<ErrorMiddleware>(TYPES.ErrorMiddleware).to(ErrorMiddlewareImpl);

// Utils
container.bind<Logger>(TYPES.Logger).to(WinstonLogger);
container.bind<Validator>(TYPES.Validator).to(JoiValidator);

// Services
container.bind<HealthService>(TYPES.HealthService).to(HealthServiceImpl);
container.bind<ProductService>(TYPES.ProductService).to(ProductServiceImpl);

// Repository
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl);

export default container;
