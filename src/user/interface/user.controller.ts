import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';

import { LoginCommand } from '../application/command/login.command';
import { CreateUserCommand } from '../application/command/create-user.command';

import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from './dto/user-login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserCommand } from '../application/command/update-user.command';
import { CurrentAccount } from 'src/common/decorators/auth.decorator';
import { AccessStrategy } from 'src/auth/access.strategy';

import { Payload } from 'src/auth/jwt.payload';

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
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { account } = dto;

    const command = new LoginCommand(account);

    return this.commandBus.execute(command);
  }

  @UseGuards(AccessStrategy)
  @Get('my')
  @ApiOperation({ summary: '내정보 조회' })
  async getMyInfo(@CurrentAccount() account: Payload) {
    account.id;
  }

  @Get(':nickname')
  @ApiOperation({ summary: '닉네임으로 유저 조회' })
  async getUser() {}

  @Get('')
  @ApiOperation({ summary: '유저 리스트 조회' })
  async getUsers() {}

  @Patch('')
  @ApiOperation({ summary: '내정보 수정' })
  async update() {}
}
