import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Party } from './party';

@Injectable()
export class PartyFactory {
  constructor(private eventBus: EventBus) {}

  create(id: number, title: string, contents: string): Party {
    const party = new Party(id, title, contents);

    return party;
  }

  reconstitute(id: number, title: string, contents: string): Party {
    return new Party(id, title, contents);
  }
}
