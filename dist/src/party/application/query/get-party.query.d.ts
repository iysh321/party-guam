import { IQuery } from '@nestjs/cqrs';
export declare class GetPartyQuery implements IQuery {
    readonly partyId: number;
    constructor(partyId: number);
}
