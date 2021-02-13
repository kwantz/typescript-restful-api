import CreateProductRequest from '@models/CreateProductRequest';
import ListProductRequest from '@models/ListProductRequest';
import ProductResponse from '@models/ProductResponse';
import UpdateProductRequest from '@models/UpdateProductRequest';

export default interface ProductService {
  create(createProductRequest: CreateProductRequest): Promise<ProductResponse>;
  update(
    id: string,
    updateProductRequest: UpdateProductRequest
  ): Promise<ProductResponse>;
  get(id: string): Promise<ProductResponse>;
  list(listProductRequest: ListProductRequest): Promise<Array<ProductResponse>>;
}
