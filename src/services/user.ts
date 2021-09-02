import { databaseLib } from '../lib/database';
import { User } from '../database/users/entities/user';

export const userServices = {
  getAll: async function() {
    return await databaseLib.getAll(User);
  },
  get: async function(id: string = '') {
    if (!id) {
      return [];
    }

    return await databaseLib.get(User, id, 'user');
  },
};
