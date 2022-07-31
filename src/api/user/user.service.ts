import { ForbiddenException, Injectable } from '@nestjs/common';
import { ERROR } from 'src/share/common/error-code.const';
import { CreateUserDto } from './dto';
import { UserRepository } from './user.repository';
import * as argon from 'argon2';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userFoundByEmail = await this.userRepository.findOneByCondition({
      where: { email: createUserDto.email },
    });

    if (userFoundByEmail) {
      throw new ForbiddenException(ERROR.EMAIL_ALREADY_EXIST.MESSAGE);
    }

    const userFoundByUsername = await this.userRepository.findOneByCondition({
      where: { username: createUserDto.username },
    });

    if (userFoundByUsername) {
      throw new ForbiddenException(ERROR.USERNAME_ALREADY_EXIST.MESSAGE);
    }

    const newUser = await this.userRepository.create({
      ...createUserDto,
      password: await argon.hash(createUserDto.password),
    });

    const userCreated = await this.userRepository.save(newUser);
    return userCreated;
  }
}
