import { Module } from '@nestjs/common';
import { PartyController } from './interface/party.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartyEntity } from './infra/db/entity/party/party.entity';
import { PartyFactory } from './domain/party/party.factory';
import { PartyRepository } from './infra/db/repository/party.repository';
import { CreatePartyHandler } from './application/command/create-party.handler';

const commandHandlers = [CreatePartyHandler];

const queryHandlers = [];

const eventHandlers = [];

const factories = [PartyFactory];

const repositories = [{ provide: 'PartyRepository', useClass: PartyRepository }];

@Module({
  controllers: [PartyController],
  providers: [...commandHandlers, ...queryHandlers, ...eventHandlers, ...factories, ...repositories],
  imports: [CqrsModule, TypeOrmModule.forFeature([PartyEntity])],
})
export class PartyModule {}
