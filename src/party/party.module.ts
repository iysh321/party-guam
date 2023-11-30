import { Module } from '@nestjs/common';
import { PartyController } from './interface/party.controller';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  controllers: [PartyController],
  imports: [CqrsModule],
})
export class PartyModule {}
