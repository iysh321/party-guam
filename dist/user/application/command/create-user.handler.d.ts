import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserFactory } from '../../domain/user/user.factory';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private userFactory;
    private userRepository;
    constructor(userFactory: UserFactory, userRepository: IUserRepository);
    execute(command: CreateUserCommand): Promise<import("../../infra/db/entity/user.entity").UserEntity>;
}
