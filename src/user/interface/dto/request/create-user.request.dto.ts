import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({
    example: 'account',
    description: '계정',
  })
  @IsNotEmpty()
  @IsString()
  readonly account: string;

  @ApiProperty({
    example: 'nickname',
    description: '닉네임 2자 이상 30자 이하',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  readonly nickname: string;

  @ApiProperty({
    example: 'email@party.com',
    description: '이메일 길이 최대 60',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MaxLength(60)
  readonly email: string;
}
