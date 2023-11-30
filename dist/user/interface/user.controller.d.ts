import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Response } from 'express';
import { DecodedPayload } from 'src/auth/jwt.payload';
import { CreateUserRequestDto } from './dto/request/create-user.request.dto';
import { UserLoginRequestDto } from './dto/request/user-login.request.dto';
import { UpdateUserRequestDto } from './dto/request/update-user.request.dto';
import { UserParamRequestDto } from './dto/request/user.param.request.dto';
import { UserQueryRequestDto } from './dto/request/user.query.request.dto';
import { UserResponseDto } from './dto/response/UserResponseDto';
export declare class UserController {
    private commandBus;
    private queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    createUser(dto: CreateUserRequestDto): Promise<void>;
    login(res: Response, dto: UserLoginRequestDto): Promise<void>;
    updateUser(dto: UpdateUserRequestDto): Promise<void>;
    getUsers(query: UserQueryRequestDto): Promise<UserResponseDto>;
    getUser(param: UserParamRequestDto): Promise<UserResponseDto>;
    getMyInfo(account: DecodedPayload): Promise<UserResponseDto>;
    follow(account: DecodedPayload, nickname: UserParamRequestDto): Promise<void>;
    unfollow(account: DecodedPayload, nickname: UserParamRequestDto): Promise<void>;
}
