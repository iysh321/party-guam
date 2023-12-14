import { ICommand } from '@nestjs/cqrs';
export declare class UpdatePartyCommand implements ICommand {
    readonly userId: number;
    readonly partyId: number;
    readonly title: string;
    readonly content: string;
    constructor(userId: number, partyId: number, title: string, content: string);
}
