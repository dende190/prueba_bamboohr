import express from 'express';
import { Request, Response } from "express";
import { mysqlLib } from '../lib/mysql';
import { config } from '../../config/config';
import { Item } from '../database/orders/entities/item';

export function itemsRoute(app: any) {
  const router = express.Router();
  app.use('/item', router);

  router.get(
    '/',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await mysqlLib.getAll(Item));
    }
  );

  router.get(
    '/:id',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await mysqlLib.get(Item, request.params.id));
    }
  );
}
