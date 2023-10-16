import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entity/user.entity';

import { User } from 'src/users/user/domain/user';
import { UserFactory } from 'src/users/user/domain/user.factory';
import { IUserRepository } from 'src/users/user/domain/repository/iuser.repository';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    readonly dataSource: DataSource,
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private userFactory: UserFactory,
  ) {}

  async findByAccount(account: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({
      where: { account },
    });
    if (!userEntity) {
      return null;
    }

    const { nickname, email } = userEntity;

    this.userFactory.reconstitute(account, nickname, email);

    return;
  }

  async findByNcikname(nickname: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({
      where: { nickname },
    });
    if (!userEntity) {
      return null;
    }

    const { account, email } = userEntity;

    return this.userFactory.reconstitute(account, nickname, email);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userEntity = await this.userRepository.findOne({
      where: { email },
    });
    if (!userEntity) {
      return null;
    }

    const { account, nickname } = userEntity;

    return this.userFactory.reconstitute(account, nickname, email);
  }

  async save(account: string, nickname: string, email: string): Promise<UserEntity> {
    const user = await this.userRepository.save({ account, nickname, email });

    return user;
  }

  async update(is_party, meeting_type, meeting_week, meeting_time, mbti): Promise<void> {
    await this.dataSource.transaction(async (manager) => {
      const user = await this.userRepository.save({ is_party, meeting_type, meeting_week, meeting_time, mbti });

      await manager.save(user);
    });
  }
}
