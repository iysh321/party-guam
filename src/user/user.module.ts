import { Module } from '@nestjs/common';
import { UserController } from './interface/user.controller';
import { UserService } from './application/user.service';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './infra/db/entity/user.entity';
import { CreateUserHandler } from './application/command/create-user.handler';
import { LoginHandler } from './application/command/login.handler';
import { GetUserHandler } from './application/query/get-user.handler';
import { UserFactory } from './domain/user/user.factory';
import { UserRepository } from './infra/db/repository/user.repository';
import { AuthModule } from 'src/auth/auth.module';
import { GetUsersHandler } from './application/query/get-users.handler';
import { UserByNicknameHandler } from './application/query/get-user-by-nickname.handler';

const commandHandlers = [CreateUserHandler, LoginHandler];

const queryHandlers = [UserByNicknameHandler, GetUserHandler, GetUsersHandler];

const eventHandlers = [];

const factories = [UserFactory];

const repositories = [{ provide: 'UserRepository', useClass: UserRepository }];

@Module({
  controllers: [UserController],
  providers: [UserService, ...commandHandlers, ...queryHandlers, ...eventHandlers, ...factories, ...repositories],
  imports: [CqrsModule, AuthModule, TypeOrmModule.forFeature([UserEntity])],
})
export class UserModule {}
