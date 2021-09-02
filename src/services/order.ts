import { databaseLib } from '../lib/database';
import { Order } from '../database/orders/entities/order';
import { OrderItem } from '../database/orders/entities/orderItem';
import { itemServices } from '../services/item';
import { userServices } from '../services/user';
import crypto from 'crypto';

export const orderServices = {
  getAll: async function() {
    return await databaseLib.getAll(Order);
  },
  get: async function(id: string = '') {
    if (!id) {
      return [];
    }

    return await databaseLib.get(Order, id);
  },
  create: async function({userId, items}) {
    const itemPrices = await itemServices.getPrices(items);
    const user = await userServices.get(userId);
    let priceTotal = 0;
    itemPrices.forEach(item => {
      priceTotal += item.price;
    });
    let order = new Order();
    order.userId = userId;
    order.vat = 16;
    order.subtotal = (priceTotal - (priceTotal * (order.vat / 100)));
    order.total = priceTotal;
    order.total_items = itemPrices.length;
    order.customer_name = user.name;
    order.status = 'pending';
    order.token = (userId + new Date().getTime());
    const orderData = await databaseLib.create(Order, order);

    let orderItem = [];
    itemPrices.forEach(item => {
      orderItem.push({
        item: item.id,
        order: orderData.id,
      })
    });

    await databaseLib.create(OrderItem, orderItem);
    return orderData;
  },
  changeStatus: async function({orderId, status}) {
    if (['completed', 'canceled', 'pending'].indexOf(status) === -1) {
      return;
    }
    let order = await this.get(orderId);
    order.status = status;
    return await databaseLib.create(Order, order);
  },
  getUserOrder: async function(userId) {
    return await databaseLib.join(Order, 1);
  },
};
