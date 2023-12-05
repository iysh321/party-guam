import { ICommand } from '@nestjs/cqrs';
export declare class CreateFollowCommand implements ICommand {
    readonly userId: number;
    readonly nickname: string;
    constructor(userId: number, nickname: string);
}
