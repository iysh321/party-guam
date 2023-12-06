import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Follow } from './follow';

@Injectable()
export class FollowFactory {
  constructor(private eventBus: EventBus) {}

  create(userId: number, followId: number): Follow {
    const follow = new Follow(userId, followId);

    // this.eventBus.publish(new FollowCreatedEvent(email, signupVerifyToken));

    return follow;
  }

  reconstitute(userId: number, followId: number): Follow {
    return new Follow(userId, followId);
  }
}
