import { ICommandHandler } from '@nestjs/cqrs';
import { UserFactory } from '../../domain/user/user.factory';
import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
import { UnfollowCommand } from './unfollow.command';
export declare class UnFollowHandler implements ICommandHandler<UnfollowCommand> {
    private userFactory;
    private followRepository;
    private userRepository;
    constructor(userFactory: UserFactory, followRepository: IFollowRepository, userRepository: IUserRepository);
    execute(command: UnfollowCommand): Promise<boolean>;
}
