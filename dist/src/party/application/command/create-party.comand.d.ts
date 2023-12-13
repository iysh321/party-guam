import { ICommand } from '@nestjs/cqrs';
export declare class CreatePartyCommand implements ICommand {
    readonly userId: number;
    readonly title: string;
    readonly content: string;
    readonly positionId: number;
    constructor(userId: number, title: string, content: string, positionId: number);
}
