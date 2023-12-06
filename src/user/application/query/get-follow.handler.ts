import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { FollowEntity } from 'src/user/infra/db/entity/follow.entity';

import { UserEntity } from 'src/user/infra/db/entity/user.entity';
import { Repository } from 'typeorm';
import { GetFollowQuery } from './get-follow.query';

@QueryHandler(GetFollowQuery)
export class GetFollowHandler implements IQueryHandler<GetFollowQuery> {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    @InjectRepository(FollowEntity) private followRepository: Repository<FollowEntity>,
  ) {}

  async execute(query: GetFollowQuery) {
    const { userId, page, limit, sort, order } = query;
    const offset = (page - 1) * limit || 0;

    const followerCount = await this.followRepository
      .createQueryBuilder('follow')
      .select('COUNT(follow.followId)', 'total')
      .where('follow.followId = :followId', { followId: userId })
      .getRawOne();

    const followingCount = await this.followRepository
      .createQueryBuilder('follow')
      .select('COUNT(follow.userId)', 'total')
      .where('follow.userId = :userId', { userId })
      .getRawOne();

    // follow = userId -> followId
    const target = sort === 'follower' ? 'followId' : 'userId';

    const user = await this.followRepository
      .createQueryBuilder('follow')
      .leftJoin(`follow.${sort}`, `${sort}`)
      .select([`${sort}.nickname AS nickname`, `${sort}.image AS image`])
      .limit(limit)
      .offset(offset)
      .orderBy(`follow.createdAt`, order)
      .where(`follow.${target} = :userId`, { userId })
      .getRawMany();

    return { followerCount: followerCount.total, followingCount: followingCount.total, [sort]: user };
  }
}
