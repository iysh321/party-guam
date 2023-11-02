import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly account: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly nickname: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;
}
