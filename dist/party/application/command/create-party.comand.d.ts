import { ICommand } from '@nestjs/cqrs';
export declare class CreatePartyCommand implements ICommand {
    readonly title: string;
    readonly contents: string;
    constructor(title: string, contents: string);
}
