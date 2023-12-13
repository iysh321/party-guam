import { Module } from '@nestjs/common';
import { PartyController } from './interface/party.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartyEntity } from './infra/db/entity/party/party.entity';
import { PartyFactory } from './domain/party/party.factory';
import { PartyRepository } from './infra/db/repository/party.repository';
import { CreatePartyHandler } from './application/command/create-party.handler';
import { PartyUserRepository } from './infra/db/repository/party-user.repository';
import { GetPartiessHandler } from './application/query/get-parties.handler';
import { GetUserHandler } from './application/query/get-party.handler';
import { PartyUserEntity } from './infra/db/entity/party/party-user.entity';
import { UpdatePartyHandler } from './application/command/update-party.handler';
import { DeletePartyHandler } from './application/command/delete-party.handler';

const commandHandlers = [CreatePartyHandler, UpdatePartyHandler, DeletePartyHandler];

const queryHandlers = [GetPartiessHandler, GetUserHandler];

const eventHandlers = [];

const factories = [PartyFactory];

const repositories = [
  { provide: 'PartyRepository', useClass: PartyRepository },
  { provide: 'PartyUserRepository', useClass: PartyUserRepository },
];

@Module({
  controllers: [PartyController],
  providers: [...commandHandlers, ...queryHandlers, ...eventHandlers, ...factories, ...repositories],
  imports: [CqrsModule, TypeOrmModule.forFeature([PartyEntity, PartyUserEntity])],
})
export class PartyModule {}
