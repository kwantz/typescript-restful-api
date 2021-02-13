import RequestValidationModel from '@models/RequestValidationModel';

export default class ListProductRequest extends RequestValidationModel {
  offset: number;
  limit: number;

  constructor(data: ListProductRequest) {
    super();
    this.offset = data.offset;
    this.limit = data.limit;
  }
}
