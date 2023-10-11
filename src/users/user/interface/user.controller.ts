import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Controller, Get, Patch, Post } from '@nestjs/common';

import { LoginCommand } from '../application/command/login.command';
import { CreateUserCommand } from '../application/command/create-user.command';

import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserLoginDto } from './dto/user-login.dto';

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
    const { nickname, email } = dto;

    const command = new CreateUserCommand(nickname, email);

    return this.commandBus.execute(command);
  }

  @Post('/login')
  @ApiOperation({ summary: '로그인' })
  async login(@Body() dto: UserLoginDto): Promise<string> {
    const { account, password } = dto;

    const command = new LoginCommand(account, password);

    return this.commandBus.execute(command);
  }

  @Get('')
  @ApiOperation({ summary: '유저 리스트 조회' })
  async getUsers() {}

  @Get(':nickname')
  @ApiOperation({ summary: '닉네임으로 유저 조회' })
  async getUser() {}

  @Patch('')
  @ApiOperation({ summary: '내정보 수정' })
  async update() {}
}
