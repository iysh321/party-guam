import { IQuery } from '@nestjs/cqrs';
export declare class GetUserQuery implements IQuery {
    readonly userId: number;
    constructor(userId: number);
}
