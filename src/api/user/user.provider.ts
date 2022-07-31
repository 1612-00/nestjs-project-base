import { DataSource } from 'typeorm';
import { USER_CONST } from './user.constant';
import { UserEntity } from './user.entity';

export const userProvider = [
  {
    provide: USER_CONST.MODEL_PROVIDER,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];
