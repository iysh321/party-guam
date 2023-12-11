import { ICommandHandler } from '@nestjs/cqrs';
import { UserFactory } from '../../domain/user/user.factory';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { UpdateUserCommand } from './update-user.command';
import { IUserSkillRepository } from 'src/user/domain/user/repository/iuser.skill.repository';
export declare class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    private userFactory;
    private userRepository;
    private userSkillRepository;
    constructor(userFactory: UserFactory, userRepository: IUserRepository, userSkillRepository: IUserSkillRepository);
    execute(command: UpdateUserCommand): Promise<void>;
}
