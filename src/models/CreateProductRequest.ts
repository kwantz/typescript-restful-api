import RequestValidationModel from '@models/RequestValidationModel';
import * as joi from 'joiful';

export default class CreateProductRequest extends RequestValidationModel {
  @(joi.string().required())
  name: string;

  @(joi.number().min(1).required())
  price: number;

  @(joi.number().integer().min(0).required())
  quantity: number;

  constructor(data: CreateProductRequest) {
    super();
    this.name = data.name;
    this.price = data.price;
    this.quantity = data.quantity;
  }
}
