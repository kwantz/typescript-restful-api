import TYPES from '@configs/types';
import Product from '@entities/Product';
import NotFoundError from '@errors/NotFoundError';
import CreateProductRequest from '@models/CreateProductRequest';
import ListProductRequest from '@models/ListProductRequest';
import ProductResponse from '@models/ProductResponse';
import UpdateProductRequest from '@models/UpdateProductRequest';
import ProductRepository from '@repositories/ProductRepository';
import ProductService from '@services/ProductService';
import Validator from '@utils/Validator';
import { inject, injectable } from 'inversify';

@injectable()
export default class ProductServiceImpl implements ProductService {
  @inject(TYPES.Validator)
  private readonly _validator!: Validator;

  @inject(TYPES.ProductRepository)
  private readonly _productRepository!: ProductRepository;

  public async get(id: string): Promise<ProductResponse> {
    const product = await this.findProductByIdOrThrowNotFound(id);
    return this.convertProductToProductResponse(product);
  }

  public async list(listProductRequest: ListProductRequest): Promise<Array<ProductResponse>> {
    const listProduct = await this._productRepository.findAll(listProductRequest);
    return listProduct.map((product) => this.convertProductToProductResponse(product));
  }

  public async create(createProductRequest: CreateProductRequest): Promise<ProductResponse> {
    await this._validator.validate(createProductRequest);

    const product = await this._productRepository.create({
      name: createProductRequest.name,
      price: createProductRequest.price,
      quantity: createProductRequest.quantity,
    });

    return this.convertProductToProductResponse(product);
  }

  public async update(
    id: string,
    updateProductRequest: UpdateProductRequest
  ): Promise<ProductResponse> {
    await this._validator.validate(updateProductRequest);

    const product = await this.findProductByIdOrThrowNotFound(id);
    product.name = updateProductRequest.name;
    product.price = updateProductRequest.price;
    product.quantity = updateProductRequest.quantity;

    await this._productRepository.update(product);
    return this.convertProductToProductResponse(product);
  }

  private async findProductByIdOrThrowNotFound(id: string): Promise<Product> {
    const product = await this._productRepository.findById(id);
    if (product === null) {
      throw new NotFoundError('Product not found.');
    } else {
      return product;
    }
  }

  private convertProductToProductResponse(product: Product): ProductResponse {
    return {
      id: product.id ?? -1,
      name: product.name ?? '-',
      price: product.price ?? -1,
      quantity: product.quantity ?? -1,
      createdAt: product.createdAt ?? new Date('01-01-1990'),
      updatedAt: product.updatedAt ?? new Date('01-01-1990'),
    };
  }
}
