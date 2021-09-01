import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Item } from '../entities/item';

export default class CreateItems implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Item)
      .values([
        { name: 'Chocorramo', price: 1000 },
        { name: 'Bunuelo', price: 2000 },
        { name: 'Arepa', price: 1500 },
        { name: 'Detodito', price: 1500 },
        { name: 'Poker', price: 2500 },
        { name: 'Quatro', price: 2000 },
        { name: 'Nucita', price: 400 },
        { name: 'Cocosette', price: 900 },
        { name: 'Empanada', price: 1000 },
      ])
      .execute()
  }
}
