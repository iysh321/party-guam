import { EventBus } from '@nestjs/cqrs';
import { User } from './user';
export declare class UserFactory {
    private eventBus;
    constructor(eventBus: EventBus);
    create(id: number, account: string, nickname: string, email: string): User;
    reconstitute(id: number, account: string, nickname: string, email: string): User;
}
