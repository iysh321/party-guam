import { ICommand } from '@nestjs/cqrs';
export declare class UpdateUserCommand implements ICommand {
    readonly id: number;
    readonly is_party: boolean;
    readonly meeting_type: string;
    readonly meeting_week: string;
    readonly meeting_time: string;
    readonly mbti: string;
    readonly skills: number[];
    constructor(id: number, is_party: boolean, meeting_type: string, meeting_week: string, meeting_time: string, mbti: string, skills: number[]);
}
