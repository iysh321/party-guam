import { ICommandHandler } from '@nestjs/cqrs';
import { UserFactory } from '../../domain/user/user.factory';
import { FollowCommand } from './follow.command';
import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
import { IUserRepository } from 'src/user/domain/user/repository/iuser.repository';
export declare class FollowHandler implements ICommandHandler<FollowCommand> {
    private userFactory;
    private followRepository;
    private userRepository;
    constructor(userFactory: UserFactory, followRepository: IFollowRepository, userRepository: IUserRepository);
    execute(command: FollowCommand): Promise<import("../../domain/follow/follow").Follow>;
}
