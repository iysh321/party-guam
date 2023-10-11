import { Connection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';

import { User } from 'src/users/user/domain/user';
import { UserFactory } from 'src/users/user/domain/user.factory';
import { IUserRepository } from 'src/users/user/domain/repository/iuser.repository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    private connection: Connection,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private userFactory: UserFactory,
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({
      where: { email },
    });
    if (!userEntity) {
      return null;
    }

    const { id, nickname, password } = userEntity;

    return this.userFactory.reconstitute(id, nickname, password);
  }

  async findByEmailAndPassword(email: string, password: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({
      where: { email, password },
    });
    if (!userEntity) {
      return null;
    }

    const { id, nickname } = userEntity;

    return this.userFactory.reconstitute(id, nickname, email, signupVerifyToken, password);
  }

  async findBySignupVerifyToken(signupVerifyToken: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({
      where: { signupVerifyToken },
    });
    if (!userEntity) {
      return null;
    }

    const { id, nickname, email, password } = userEntity;

    return this.userFactory.reconstitute(id, nickname, email, signupVerifyToken, password);
  }

  async save(id: string, nickname: string, email: string, password: string, signupVerifyToken: string): Promise<void> {
    await this.connection.transaction(async (manager) => {
      const user = new UserEntity();
      user.id = id;
      user.nickname = nickname;
      user.email = email;
      user.password = password;
      user.signupVerifyToken = signupVerifyToken;

      await manager.save(user);
    });
  }
}
