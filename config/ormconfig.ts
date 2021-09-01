import { config } from '../config/config';

const ormconfig: any = [
  {
    "name": "default",
    "type": "mysql",
    "host": config.dbHost,
    "port": 3306,
    "username": config.dbUser,
    "password": config.dbPassword,
    "database": config.dbNameOrder,
    "synchronize": true,
    "logging": false,
    "keepConnectionAlive": true,
    "entities": [
      "src/database/orders/entities/*.ts"
    ],
    "migrations": [
      "src/database/orders/migration/*.ts"
    ],
    "subscribers": [
      "src/database/orders/subscriber/*.ts"
    ],
    "seeds": [
      "src/database/orders/seeds/*.ts"
    ],
    "factories": [
      "src/database/orders/factories/*.ts"
    ]
  },
  {
    "name": "user",
    "type": "mysql",
    "host": config.dbHost,
    "port": 3306,
    "username": config.dbUser,
    "password": config.dbPassword,
    "database": config.dbNameUser,
    "synchronize": true,
    "logging": false,
    "keepConnectionAlive": true,
    "entities": [
      "src/database/users/entities/*.ts"
    ],
    "migrations": [
      "src/database/users/migration/*.ts"
    ],
    "subscribers": [
      "src/database/users/subscriber/*.ts"
    ],
    "seeds": [
      "src/database/users/seeds/*.ts"
    ],
    "factories": [
      "src/database/users/factories/*.ts"
    ]
  }
];

export { ormconfig };
