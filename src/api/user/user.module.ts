import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';
import { UserController } from './user.controller';
import { userProvider } from './user.provider';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...userProvider],
  exports: [UserService, UserRepository],
})
export class UserModule {}
