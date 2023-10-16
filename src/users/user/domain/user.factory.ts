import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';

import { User } from './user';

@Injectable()
export class UserFactory {
  constructor(private eventBus: EventBus) {}

  create(account: string, nickname: string, email: string): User {
    const user = new User(account, nickname, email);

    // this.eventBus.publish(new UserCreatedEvent(email));

    return user;
  }

  reconstitute(account: string, nickname: string, email: string): User {
    return new User(account, nickname, email);
  }
}
