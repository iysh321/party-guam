import { ICommand } from '@nestjs/cqrs';
export declare class CreateFollowCommand implements ICommand {
    readonly nickname: string;
    readonly followingId: number;
    constructor(nickname: string, followingId: number);
}
