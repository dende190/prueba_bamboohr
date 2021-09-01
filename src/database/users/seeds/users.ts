import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../entities/user';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { name: 'Juanpis' },
        { name: 'Claudia' },
        { name: 'Piyin' },
        { name: 'Karen' },
        { name: 'Suarez' },
        { name: 'Daniela' },
        { name: 'Paola' },
        { name: 'Maria Paula' },
        { name: 'Rodrigo' },
        { name: 'Tomas' },
        { name: 'Jeisson' },
      ])
      .execute()
  }
}
