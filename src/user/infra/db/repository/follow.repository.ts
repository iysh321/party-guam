import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
import { FollowEntity } from '../entity/follow.entity';
import { Follow } from 'src/user/domain/follow/follow';
import { FollowFactory } from 'src/user/domain/follow/follow.factory';

@Injectable()
export class FollowRepository implements IFollowRepository {
  constructor(
    readonly dataSource: DataSource,
    @InjectRepository(FollowEntity)
    private followRepository: Repository<FollowEntity>,
    private followFactory: FollowFactory,
  ) {}

  async create(userId: number, followingId: number): Promise<Follow> {
    await this.followRepository.save({ userId, followingId });

    return this.followFactory.reconstitute(userId, followingId);
  }
}
