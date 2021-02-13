import ProductImpl from '@entities/implements/sequelize/ProductImpl';
import Product from '@entities/Product';
import ListProductRequest from '@models/ListProductRequest';
import ProductRepository from '@repositories/ProductRepository';
import { injectable } from 'inversify';

@injectable()
export default class ProductRepositoryImpl implements ProductRepository {
  public async create(data: Product): Promise<Product> {
    const product = await ProductImpl.create(data);
    return product;
  }

  public async findById(id: string): Promise<Product | null> {
    const product = await ProductImpl.findOne({ where: { id } });
    return product;
  }

  public async findAll(listProductRequest: ListProductRequest): Promise<Array<Product>> {
    const product = await ProductImpl.findAll({
      limit: listProductRequest.limit,
      offset: listProductRequest.offset,
    });
    return product;
  }

  public async update(data: Product): Promise<Product> {
    const product = data as ProductImpl;
    await product.save();
    return product;
  }
}
