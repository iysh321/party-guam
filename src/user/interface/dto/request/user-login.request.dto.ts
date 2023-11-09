import { IsNotEmpty } from 'class-validator';

export class UserLoginRequestDto {
  @IsNotEmpty()
  access_token: string;
}
