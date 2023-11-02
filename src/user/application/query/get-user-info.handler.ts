import { Inject, NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { plainToInstance } from 'class-transformer';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';

import { UserResponseDto } from '../../interface/dto/response/userInfo';
import { GetUserInfoQuery } from './get-user-info.query';

@QueryHandler(GetUserInfoQuery)
export class GetUserInfoQueryHandler implements IQueryHandler<GetUserInfoQuery> {
  constructor(@Inject('UserRepository') private userRepository: IUserRepository) {}

  async execute(query: GetUserInfoQuery): Promise<UserResponseDto> {
    const { userId } = query;

    const user = await this.userRepository.findOneById(userId);

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다');
    }

    return plainToInstance(UserResponseDto, user);
  }
}
