require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 8081,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbNameUser: process.env.DB_NAME_USER,
  dbNameOrder: process.env.DB_NAME_ORDER,
};

export {config};
