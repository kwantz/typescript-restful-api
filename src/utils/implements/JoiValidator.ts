import BadRequestError from '@errors/BadRequestError';
import RequestValidationModel from '@models/RequestValidationModel';
import Validator from '@utils/Validator';
import { injectable } from 'inversify';
import * as joi from 'joiful';

@injectable()
export default class JoiValidator implements Validator {
  validate(model: RequestValidationModel): void {
    const { error } = joi.validate(model, { abortEarly: false });
    if (error) {
      const message = error.details.map((detail) => detail.message);
      throw new BadRequestError(message);
    }
  }
}
