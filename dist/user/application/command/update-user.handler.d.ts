import { ICommandHandler } from '@nestjs/cqrs';
import { UserFactory } from '../../domain/user/user.factory';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { UpdateUserCommand } from './update-user.command';
export declare class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    private userFactory;
    private userRepository;
    constructor(userFactory: UserFactory, userRepository: IUserRepository);
    execute(command: UpdateUserCommand): Promise<void>;
}
