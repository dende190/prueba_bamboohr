import express from 'express';
import { Request, Response } from 'express';
import { itemServices } from '../services/item';

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
      response.json(await itemServices.getAll());
    }
  );

  router.get(
    '/:id',
    async (
      request: Request,
      response: Response,
      next: Function
    ) => {
      response.json(await itemServices.get(request.params.id));
    }
  );
}
