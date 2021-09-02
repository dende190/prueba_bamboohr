import { databaseLib } from '../lib/database';
import { Item } from '../database/orders/entities/item';

export const itemServices = {
  getAll: async function() {
    return await databaseLib.getAll(Item);
  },
  get: async function(id: string = '') {
    if (!id) {
      return [];
    }

    return await databaseLib.get(Item, id);
  },
  getPrices: async function(items) {
    return await databaseLib.getIds(Item, items, 'items');
  }
};
