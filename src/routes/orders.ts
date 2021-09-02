import express from 'express';
import { Request, Response } from "express";
import { orderServices } from '../services/order';

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
      response.json(await orderServices.getAll());
    }
  );

  router.get(
    '/:id',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await orderServices.get(request.params.id));
    }
  );

  router.post(
    '/create',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await orderServices.create(request.body));
    }
  );

  router.post(
    '/change-status',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await orderServices.changeStatus(request.body));
    }
  );

  router.get(
    '/user/:id',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await orderServices.getUserOrder(request.params.id));
    }
  );
}
