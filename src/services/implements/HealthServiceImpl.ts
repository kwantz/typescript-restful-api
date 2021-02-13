import HealthResponse from '@models/HealthResponse';
import HealthService from '@services/HealthService';
import { injectable } from 'inversify';

@injectable()
export default class HealthServiceImpl implements HealthService {
  get(): HealthResponse {
    return {
      message: 'Up',
    };
  }
}
