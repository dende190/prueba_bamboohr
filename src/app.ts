import express from 'express';
import 'reflect-metadata';
import { createConnections, Connection } from "typeorm";
import { config } from '../config/config';
import { ordersRoute } from './routes/orders';
import { itemsRoute } from './routes/items';
import { ormconfig } from '../config/ormconfig';

createConnections(ormconfig).then(async connection => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  ordersRoute(app);
  itemsRoute(app);
  app.listen(config.port, () => {
    console.log('Servidor escuchando en el puerto', config.port);
  });
}).catch(error => console.log("TypeORM connection error: ", error));
