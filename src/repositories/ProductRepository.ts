import Product from '@entities/Product';
import ListProductRequest from '@models/ListProductRequest';

export default interface ProductRepository {
  create(data: Product): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findAll(listProductRequest: ListProductRequest): Promise<Array<Product>>;
  update(data: Product): Promise<Product>;
}
