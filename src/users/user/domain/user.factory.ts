import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { UserCreatedEvent } from './user-created.event';
import { User } from './user';

@Injectable()
export class UserFactory {
  constructor(private eventBus: EventBus) {}

  create(id: string, nickname: string, email: string, signupVerifyToken: string, password: string): User {
    const user = new User(id, nickname, email, password, signupVerifyToken);

    this.eventBus.publish(new UserCreatedEvent(email, signupVerifyToken));

    return user;
  }

  reconstitute(id: string, nickname: string, email: string, signupVerifyToken: string, password: string): User {
    return new User(id, nickname, email, password, signupVerifyToken);
  }
}
