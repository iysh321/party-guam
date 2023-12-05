import { Injectable } from '@nestjs/common';
import { EventBus } from '@nestjs/cqrs';
import { Follow } from './follow';

// 팩토리 패턴을 사용하지 않고도 객체를 생성할 수 있지만,
// 팩토리 패턴은 복잡한 도메인 로직을 처리하고,
// 객체 생성 로직을 중앙 집중화하여 유지보수성을 높이고,
// 코드 중복을 줄이는 데 도움을 줄 수 있습니다.
// 팩토리 패턴은 특히 객체 생성에 필요한 로직이나 조건이 도메인의 핵심 로직과 분리되어야 할 때 유용합니다.

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
