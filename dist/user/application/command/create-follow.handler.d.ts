import { ICommandHandler } from '@nestjs/cqrs';
import { UserFactory } from '../../domain/user/user.factory';
import { CreateFollowCommand } from './create-follow.command';
import { IFollowRepository } from 'src/user/domain/follow/repository/iFollow.repository';
export declare class CreateFollowHandler implements ICommandHandler<CreateFollowCommand> {
    private userFactory;
    private followRepository;
    constructor(userFactory: UserFactory, followRepository: IFollowRepository);
    execute(command: CreateFollowCommand): Promise<import("../../domain/follow/follow").Follow>;
}
