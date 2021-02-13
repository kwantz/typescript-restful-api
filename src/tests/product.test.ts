import CreateProductRequest from '@models/CreateProductRequest';
import request from 'supertest';
import app from '../app';

describe('Test ProductController', () => {
  describe('Add new product', () => {
    const product: CreateProductRequest = {
      name: 'Product Test',
      price: 1000,
      quantity: 1,
    };

    it('When price is under 1, expect "price" must be greater than or equal to 1', async () => {
      const result = await request(app)
        .post('/products')
        .send({ ...product, price: 0 });

      expect(result.status).toBe(400);
      expect(result.body.data).toEqual(
        expect.arrayContaining(['"price" must be greater than or equal to 1'])
      );
    });

    it('When quantity is under 0, expect "quantity" must be greater than or equal to 0', async () => {
      const result = await request(app)
        .post('/products')
        .send({ ...product, quantity: -1 });

      expect(result.status).toBe(400);
      expect(result.body.data).toEqual(
        expect.arrayContaining(['"quantity" must be greater than or equal to 0'])
      );
    });

    it('When some data is not required, expect "name", "price", "quantity" is required', async () => {
      const result = await request(app).post('/products').send();

      expect(result.status).toBe(400);
      expect(result.body.data).toEqual(
        expect.arrayContaining([
          '"name" is required',
          '"price" is required',
          '"quantity" is required',
        ])
      );
    });

    it('When data is valid, expect product to be approved', async () => {
      const result = await request(app).post('/products').send(product);

      expect(result.status).toBe(200);
      expect(result.body.data).toMatchObject({
        id: expect.any(Number),
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });
    });
  });
});
