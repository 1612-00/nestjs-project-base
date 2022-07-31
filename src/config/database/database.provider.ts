import { DataSource } from 'typeorm';
import { MYSQL_CONFIG } from '../constant.config';

const dataSource = new DataSource({
  type: 'mysql',
  host: MYSQL_CONFIG.host,
  port: 3306,
  username: MYSQL_CONFIG.username,
  password: MYSQL_CONFIG.password,
  database: MYSQL_CONFIG.database,
  entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: false,
});

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
