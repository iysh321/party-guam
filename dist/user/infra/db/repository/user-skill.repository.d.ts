import { DataSource, Repository } from 'typeorm';
import { IUserSkillRepository } from 'src/user/domain/user/repository/iuser.skill.repository';
import { UserSkillEntity } from '../entity/user-skill.entity';
export declare class UserSkillRepository implements IUserSkillRepository {
    readonly dataSource: DataSource;
    private userSkillRepository;
    constructor(dataSource: DataSource, userSkillRepository: Repository<UserSkillEntity>);
    create(userId: number, skills: number[]): Promise<void>;
}
