import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Controller, Get, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentAccount } from 'src/common/decorators/auth.decorator';
import { AccessJwtAuthGuard } from 'src/common/guard/jwt.guard';
import { DecodedPayload } from 'src/auth/jwt.payload';

import { LoginCommand } from '../application/command/login.command';
import { CreateUserCommand } from '../application/command/create-user.command';
import { UpdateUserCommand } from '../application/command/update-user.command';

import { CreateUserRequestDto } from './dto/request/create-user.request.dto';
import { UserLoginRequestDto } from './dto/request/user-login.request.dto';
import { UpdateUserRequestDto } from './dto/request/update-user.request.dto';
import { UserParamRequestDto } from './dto/request/user.param.request.dto';

import { UserByNicknameQuery } from '../application/query/get-user-by-nickname.query';
import { UserQueryRequestDto } from './dto/request/user.query.request.dto';
import { GetUserQuery } from '../application/query/get-user.query';
import { GetUsersQuery } from '../application/query/get-users.query';

import { UserResponseDto, UsersResponseDto } from './dto/response/UserResponseDto copy';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOperation({ summary: '회원가입' })
  async createUser(@Body() dto: CreateUserRequestDto): Promise<void> {
    const { account, nickname, email } = dto;

    const command = new CreateUserCommand(account, nickname, email);

    return this.commandBus.execute(command);
  }

  @Post('login')
  @ApiOperation({ summary: '로그인' })
  async login(@Res() res: Response, @Body() dto: UserLoginRequestDto) {
    const { account } = dto;

    const command = new LoginCommand(account);

    const reuslt = await this.commandBus.execute(command);

    res.cookie('refreshToken', reuslt.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });

    res.send({ accessToken: reuslt.accessToken });
  }

  @Patch('info')
  @ApiOperation({ summary: '추가 정보 기입 또는 수정' })
  async updateUser(@Body() dto: UpdateUserRequestDto): Promise<void> {
    const { is_party, meeting_type, meeting_week, meeting_time, mbti } = dto;

    const command = new UpdateUserCommand(is_party, meeting_type, meeting_week, meeting_time, mbti);

    return this.commandBus.execute(command);
  }

  @UseGuards(AccessJwtAuthGuard)
  @Patch('')
  @ApiOperation({ summary: '내정보 수정' })
  async update() {}

  @Get('')
  @ApiOperation({ summary: '유저 다수 조회' })
  @ApiResponse({
    status: 200,
    description: '성공적으로 유저 목록을 가져왔습니다.',
    type: UsersResponseDto,
  })
  async getUsers(@Query() query: UserQueryRequestDto) {
    const { page, limit, sort, order } = query;

    const userInfoByNickname = new GetUsersQuery(page, limit, sort, order);

    const result = this.queryBus.execute(userInfoByNickname);

    return plainToInstance(UserResponseDto, result);
  }

  @Get(':nickname')
  @ApiOperation({ summary: '닉네임으로 유저 조회' })
  async getUser(@Param() param: UserParamRequestDto) {
    const userInfoByNickname = new UserByNicknameQuery(param.nickname);

    const result = this.queryBus.execute(userInfoByNickname);

    return plainToInstance(UserResponseDto, result);
  }

  @UseGuards(AccessJwtAuthGuard)
  @Get('my')
  @ApiOperation({ summary: '내정보 조회' })
  async getMyInfo(@CurrentAccount() account: DecodedPayload): Promise<UserResponseDto> {
    const getUserInfoQuery = new GetUserQuery(account.id);

    const result = this.queryBus.execute(getUserInfoQuery);

    return plainToInstance(UserResponseDto, result);
  }
}
