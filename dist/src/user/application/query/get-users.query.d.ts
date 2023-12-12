import { IQuery } from '@nestjs/cqrs';
export declare class GetUsersQuery implements IQuery {
    readonly page: number;
    readonly limit: number;
    readonly sort: string;
    readonly order: 'ASC' | 'DESC';
    constructor(page: number, limit: number, sort: string, order: 'ASC' | 'DESC');
}
