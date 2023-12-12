import { UserEntity } from './user.entity';
export declare class ExperienceEntity {
    id: number;
    position: string;
    description: string;
    start_date: Date;
    end_date: Date;
    user: UserEntity;
}
