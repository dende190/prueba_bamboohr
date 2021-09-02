import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  OneToOne
} from 'typeorm';

@Entity()
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number
  @Column()
  userId!: number
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
