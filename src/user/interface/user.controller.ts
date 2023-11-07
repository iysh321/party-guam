import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Controller, Get, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { LoginCommand } from '../application/command/login.command';
import { CreateUserCommand } from '../application/command/create-user.command';

import { CreateUserDto } from './dto/request/create-user.request.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from './dto/request/user-login.request.dto';
import { UpdateUserDto } from './dto/request/update-user.request.dto';
import { UpdateUserCommand } from '../application/command/update-user.command';
import { CurrentAccount } from 'src/common/decorators/auth.decorator';

import { AccessJwtAuthGuard } from 'src/common/guard/jwt.guard';
import { DecodedPayload } from 'src/auth/jwt.payload';
import { GetUserInfoQuery } from '../application/query/get-user-info.query';
import { UserResponseDto } from './dto/response/userInfo';
import { plainToInstance } from 'class-transformer';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOperation({ summary: '회원가입' })
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    const { account, nickname, email } = dto;

    const command = new CreateUserCommand(account, nickname, email);

    return this.commandBus.execute(command);
  }

  @Patch('info')
  @ApiOperation({ summary: '추가 정보 기입 또는 수정' })
  async updateUser(@Body() dto: UpdateUserDto): Promise<void> {
    const { is_party, meeting_type, meeting_week, meeting_time, mbti } = dto;

    const command = new UpdateUserCommand(is_party, meeting_type, meeting_week, meeting_time, mbti);

    return this.commandBus.execute(command);
  }

  @Post('login')
  @ApiOperation({ summary: '로그인' })
  async login(@Res() res: Response, @Body() dto: UserLoginDto) {
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

  @UseGuards(AccessJwtAuthGuard)
  @Get('my')
  @ApiOperation({ summary: '내정보 조회' })
  async getMyInfo(@CurrentAccount() account: DecodedPayload): Promise<UserResponseDto> {
    const getUserInfoQuery = new GetUserInfoQuery(account.id);

    const result = this.queryBus.execute(getUserInfoQuery);

    return plainToInstance(UserResponseDto, result);
  }

  @Get(':nickname')
  @ApiOperation({ summary: '닉네임으로 유저 조회' })
  async getUser() {}

  @Get('')
  @ApiOperation({ summary: '유저 리스트 조회' })
  async getUsers() {}

  @UseGuards(AccessJwtAuthGuard)
  @Patch('')
  @ApiOperation({ summary: '내정보 수정' })
  async update() {}
}
