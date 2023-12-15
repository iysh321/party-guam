import { ICommand } from '@nestjs/cqrs';
export declare class UpdateCommentCommand implements ICommand {
    readonly commentId: number;
    readonly userId: number;
    readonly comment: string;
    constructor(commentId: number, userId: number, comment: string);
}
