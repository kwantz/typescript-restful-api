import HealthResponse from '@models/HealthResponse';

export default interface HealthService {
  get(): HealthResponse;
}
