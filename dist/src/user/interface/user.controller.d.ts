import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Response } from 'express';
import { DecodedPayload } from 'src/auth/jwt.payload';
import { CreateUserRequestDto } from './dto/request/create-user.request.dto';
import { UserLoginRequestDto } from './dto/request/user-login.request.dto';
import { UpdateUserRequestDto } from './dto/request/update-user.request.dto';
import { UserParamRequestDto } from './dto/request/user.param.request.dto';
import { UserQueryRequestDto } from './dto/request/user.query.request.dto';
import { UserResponseDto } from './dto/response/UserResponseDto';
import { FollowQueryRequestDto } from './dto/request/follow.user.request.dto';
import { FollowResponseDto } from './dto/response/FollowResponseDto';
export declare class UserController {
    private commandBus;
    private queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    createUser(res: Response, dto: CreateUserRequestDto): Promise<void>;
    login(res: Response, dto: UserLoginRequestDto): Promise<void>;
    updateUser(payload: DecodedPayload, dto: UpdateUserRequestDto): Promise<void>;
    getUsers(query: UserQueryRequestDto): Promise<UserResponseDto>;
    getMyInfo(account: DecodedPayload): Promise<UserResponseDto>;
    getUser(param: UserParamRequestDto): Promise<UserResponseDto>;
    getFollow(payload: DecodedPayload, query: FollowQueryRequestDto): Promise<FollowResponseDto>;
    follow(payload: DecodedPayload, param: UserParamRequestDto): Promise<void>;
    unfollow(payload: DecodedPayload, param: UserParamRequestDto): Promise<void>;
}
