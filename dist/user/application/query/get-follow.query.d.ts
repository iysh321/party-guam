import { IQuery } from '@nestjs/cqrs';
export declare class GetFollowQuery implements IQuery {
    readonly userId: number;
    readonly page: number;
    readonly limit: number;
    readonly sort: string;
    readonly order: 'ASC' | 'DESC';
    constructor(userId: number, page: number, limit: number, sort: string, order: 'ASC' | 'DESC');
}
