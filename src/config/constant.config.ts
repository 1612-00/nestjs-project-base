import { config } from 'dotenv';
config();

export const MYSQL_CONFIG = {
  hostMaster: process.env.MYSQL_MASTER_HOST || '',
  hostSlaves: process.env.MYSQL_SLAVES_HOST || '',
  host: process.env.MYSQL_HOST || '',
  username: process.env.MYSQL_USERNAME || '',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE_NAME || '',
  port: +process.env.MYSQL_PORT || 3306,
};
