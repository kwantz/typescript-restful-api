import Product from '@entities/Product';
import {
  AutoIncrement,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({ tableName: 'products' })
export default class ProductImpl extends Model implements Product {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'id' })
  id!: number;

  @Column({ field: 'name' })
  name!: string;

  @Column({ field: 'price' })
  price!: number;

  @Column({ field: 'quantity' })
  quantity!: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt!: Date;
}
