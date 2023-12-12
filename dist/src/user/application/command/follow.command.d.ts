import { ICommand } from '@nestjs/cqrs';
export declare class FollowCommand implements ICommand {
    readonly userId: number;
    readonly nickname: string;
    constructor(userId: number, nickname: string);
}
