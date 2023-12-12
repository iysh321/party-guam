import { IQuery } from '@nestjs/cqrs';
export declare class UserByNicknameQuery implements IQuery {
    readonly nickname: string;
    constructor(nickname: string);
}
