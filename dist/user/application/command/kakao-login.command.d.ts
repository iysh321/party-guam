import { ICommand } from '@nestjs/cqrs';
export declare class KakaoLoginCommand implements ICommand {
    readonly access_token: string;
    constructor(access_token: string);
}
