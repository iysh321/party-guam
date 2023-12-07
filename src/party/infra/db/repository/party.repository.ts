import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { IPartyRepository } from 'src/party/domain/party/repository/iPartyrepository';
import { PartyEntity } from '../entity/party/party.entity';
import { PartyFactory } from 'src/party/domain/party/party.factory';
import { Party } from 'src/party/domain/party/party';

@Injectable()
export class PartyRepository implements IPartyRepository {
  constructor(
    readonly dataSource: DataSource,
    @InjectRepository(PartyEntity)
    private partyRepository: Repository<PartyEntity>,
    private partyFactory: PartyFactory,
  ) {}

  async create(userId: number, title: string, contents: string): Promise<Party> {
    await this.partyRepository.save({ userId, title, contents });

    return this.partyFactory.reconstitute(userId, title, contents);
  }
}
