import { EventBus } from '@nestjs/cqrs';
import { Follow } from './follow';
export declare class FollowFactory {
    private eventBus;
    constructor(eventBus: EventBus);
    create(id: number, followerId: number, followingId: number): Follow;
    reconstitute(id: number, followerId: number, followingId: number): Follow;
}
