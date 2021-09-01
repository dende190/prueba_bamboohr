import 'reflect-metadata';
import { getManager, getRepository, Connection } from 'typeorm';

const mysqlLib = {
  getAll: function(table: any, dataBase: string = '') {
    return getRepository(table, 'default').find();
  },
  get: function(table: any, id: string = '', dataBase: string = '') {
    return getRepository(table, 'default').findOne({id: id});
  },
};

export {mysqlLib};
