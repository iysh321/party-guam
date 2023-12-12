import { ICommand } from '@nestjs/cqrs';
export declare class UnfollowCommand implements ICommand {
    readonly userId: number;
    readonly nickname: string;
    constructor(userId: number, nickname: string);
}
