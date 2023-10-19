import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

import { User } from './user';

@Injectable()
export class UserFactory {
  constructor(private eventBus: EventBus) {}

  create(id: number, account: string, nickname: string, email: string): User {
    const user = new User(id, account, nickname, email);

    // this.eventBus.publish(new UserCreatedEvent(email));

    return user;
  }

  reconstitute(id: number, account: string, nickname: string, email: string): User {
    return new User(id, account, nickname, email);
  }
}
