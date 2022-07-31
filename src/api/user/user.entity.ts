import { AppObject } from 'src/share/common/app.object';
import { BaseEntity } from 'src/share/database/BaseEntity';
import { Column, Entity } from 'typeorm';
import { USER_CONST } from './user.constant';
import { Exclude } from 'class-transformer';

@Entity({ name: USER_CONST.MODEL_NAME })
export class UserEntity extends BaseEntity {
  @Column({ length: 255, unique: true })
  email: string;

  @Column({ length: 255, unique: true })
  username: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ length: 255, default: null })
  fullName: string;

  @Column({ length: 255, default: null })
  address: string;

  @Column({ length: 255, default: null })
  phoneNumber: string;

  @Column({
    type: 'enum',
    enum: AppObject.USER_ROLE,
    default: AppObject.USER_ROLE.BASIC,
  })
  role: string;
}
