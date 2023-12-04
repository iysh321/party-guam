import { ICommand } from '@nestjs/cqrs';
export declare class CreateUserCommand implements ICommand {
    readonly account: string;
    readonly nickname: string;
    readonly email: string;
    constructor(account: string, nickname: string, email: string);
}
