import 'reflect-metadata';
import { classToPlain } from 'class-transformer';
import { getManager, getRepository, Connection } from 'typeorm';

const databaseLib = {
  getAll: function(table: any, dataBase: string = 'default') {
    return classToPlain(getRepository(table, 'default').find());
  },
  get: function(table: any, id: string = '', dataBase: string = 'default') {
    return classToPlain(getRepository(table, dataBase).findOne({id: id}));
  },
  getIds: function(
    table: any,
    ids: any = [],
    tableName: string = '',
    dataBase: string = 'default'
  ) {
    return classToPlain(
      getRepository(
        table,
        dataBase
      )
      .createQueryBuilder(tableName)
      .where('id IN (:ids)', { ids: ids })
      .getMany()
    );
  },
  create: function(table: any, data: any, dataBase: string = 'default') {
    return classToPlain(getRepository(table, dataBase).save(data));
  },
  join: function(
    table: any,
    ids: any = [],
    tableName: string = '',
    dataBase: string = 'default'
  ) {
    return classToPlain(
      getRepository(
        table,
        dataBase
      )
      .createQueryBuilder('order')
      .innerJoinAndSelect('order_item', '*')
      .where('userId IN (:id)', { id: 1 })
      .getMany()
    );
  }
};

export {databaseLib};
