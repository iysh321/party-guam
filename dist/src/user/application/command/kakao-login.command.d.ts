import { ICommand } from '@nestjs/cqrs';
export declare class KakaoLoginCommand implements ICommand {
    readonly accessToken: string;
    constructor(accessToken: string);
}
