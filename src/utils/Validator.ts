import RequestValidationModel from '@models/RequestValidationModel';

export default interface Validator {
  validate(model: RequestValidationModel): void;
}
