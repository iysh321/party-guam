import { ICommand } from '@nestjs/cqrs';
export declare class CreatePartyCommand implements ICommand {
    readonly userId: number;
    readonly title: string;
    readonly content: string;
    constructor(userId: number, title: string, content: string);
}
