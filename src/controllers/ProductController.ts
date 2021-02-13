import TYPES from '@configs/types';
import CreateProductRequest from '@models/CreateProductRequest';
import ListProductRequest from '@models/ListProductRequest';
import UpdateProductRequest from '@models/UpdateProductRequest';
import WebResponse from '@models/WebResponse';
import ProductService from '@services/ProductService';
import { Request } from 'express';
import { inject } from 'inversify';
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  httpPut,
  requestParam,
} from 'inversify-express-utils';

@controller('/products')
export default class ProductController extends BaseHttpController {
  @inject(TYPES.ProductService)
  private readonly _productService!: ProductService;

  @httpPost('/')
  public async createProduct(req: Request): Promise<WebResponse> {
    const createProductRequest = new CreateProductRequest(req.body);
    const productResponse = await this._productService.create(createProductRequest);
    return {
      code: 200,
      status: 'OK',
      data: productResponse,
    };
  }

  @httpPut('/:id')
  public async updateProduct(@requestParam('id') id: string, req: Request): Promise<WebResponse> {
    const updateProductRequest = new UpdateProductRequest(req.body);
    const productResponse = await this._productService.update(id, updateProductRequest);
    return {
      code: 200,
      status: 'OK',
      data: productResponse,
    };
  }

  @httpGet('/:id')
  public async getProduct(@requestParam('id') id: string): Promise<WebResponse> {
    const productResponse = await this._productService.get(id);
    return {
      code: 200,
      status: 'OK',
      data: productResponse,
    };
  }

  @httpGet('/')
  public async listProduct(req: Request): Promise<WebResponse> {
    const listProductRequest = new ListProductRequest({
      limit: Number(req.query.limit) || 10,
      offset: Number(req.query.offset) || 0,
    });
    const listProductResponse = await this._productService.list(listProductRequest);
    return {
      code: 200,
      status: 'OK',
      data: listProductResponse,
    };
  }
}
