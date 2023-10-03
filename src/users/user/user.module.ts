import { Module } from '@nestjs/common';
import { UserController } from './interface/user.controller';
import { UserService } from './application/user.service';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [CqrsModule],
})
export class UserModule {}
