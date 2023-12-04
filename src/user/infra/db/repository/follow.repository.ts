import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
import { FollowEntity } from '../entity/follow.entity';
import { Follow } from 'src/user/domain/follow/follow';
import { FollowFactory } from 'src/user/domain/follow/follow.factory';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class FollowRepository implements IFollowRepository {
  constructor(
    readonly dataSource: DataSource,
    @InjectRepository(FollowEntity)
    private followRepository: Repository<FollowEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private followFactory: FollowFactory,
  ) {}

  async create(nickname: string, followingId: number): Promise<Follow> {
    const follower = await this.userRepository.findOne({ where: { nickname } });

    const result = await this.followRepository.save({ follower, followingId });

    return this.followFactory.reconstitute(result.id, follower.id, followingId);
  }
}
