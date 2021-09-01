import express from 'express';
import { Request, Response } from "express";
import { mysqlLib } from '../lib/mysql';
import { config } from '../../config/config';
import { Order } from '../database/orders/entities/order';

export function ordersRoute(app: any) {
  const router = express.Router();
  app.use('/order', router);

  router.get(
    '/',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await mysqlLib.get(Order));
    }
  );

  router.get(
    '/:id',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await mysqlLib.get(Order, request.params.id));
    }
  );
}
