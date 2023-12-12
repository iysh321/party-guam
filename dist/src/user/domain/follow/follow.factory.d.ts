import { EventBus } from '@nestjs/cqrs';
import { Follow } from './follow';
export declare class FollowFactory {
    private eventBus;
    constructor(eventBus: EventBus);
    create(userId: number, followId: number): Follow;
    reconstitute(userId: number, followId: number): Follow;
}
