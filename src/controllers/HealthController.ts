import WebResponse from '@models/WebResponse';
import {
  BaseHttpController,
  controller,
  httpGet,
} from 'inversify-express-utils';

@controller('/health')
export default class HealthController extends BaseHttpController {
  @httpGet('/')
  private getHealth(): WebResponse {
    return {
      code: 200,
      status: 'OK',
      data: 'Up',
    };
  }
}
