import { NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Repository } from 'typeorm';

import { userInfoByNicknameQuery } from './userinfoByNickname.query';

@QueryHandler(userInfoByNicknameQuery)
export class userInfoByNicknameQueryHandler implements IQueryHandler<userInfoByNicknameQuery> {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

  async execute(query: userInfoByNicknameQuery) {
    const { nickname } = query;

    const user = await this.userRepository.findOne({
      where: { nickname },
    });

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return user;
  }
}
