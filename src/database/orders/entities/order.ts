import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm';
import { OrderItem } from './orderItem';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @OneToMany(type => OrderItem, order_item => order_item.item) @JoinColumn()
  order_items!: OrderItem
  @Column()
  subtotal!: number
  @Column()
  vat!: number
  @Column()
  total!: number
  @Column()
  token!: string
  @Column()
  total_items!: number
  @Column()
  customer_name!: string
  @Column()
  status!: string
}
