import { ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserFactory } from '../../domain/user/user.factory';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { AuthService } from 'src/auth/auth.service';
export declare class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
    private userFactory;
    private userRepository;
    private authService;
    constructor(userFactory: UserFactory, userRepository: IUserRepository, authService: AuthService);
    execute(command: CreateUserCommand): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
