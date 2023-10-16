import { Injectable, Dependencies } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { IUserRepository } from 'src/users/user/domain/repository/iuser.repository';
import { UserRepository } from 'src/users/user/infra/db/repository/userRepository';

@Dependencies(UserRepository, JwtService)
@Injectable()
export class AuthService {
  jwtService: JwtService;
  userRepository: IUserRepository;
  constructor(userRepository, jwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  async login(account: string) {
    const user = await this.userRepository.findByAccount(account);

    const payload = { username: user, sub: user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
