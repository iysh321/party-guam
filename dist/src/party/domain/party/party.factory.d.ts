import { EventBus } from '@nestjs/cqrs';
import { Party } from './party';
export declare class PartyFactory {
    private eventBus;
    constructor(eventBus: EventBus);
    create(id: number, title: string, content: string): Party;
    reconstitute(id: number, title: string, content: string): Party;
}
