import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UserParamRequestDto {
  @ApiProperty({
    description: '닉네임',
    example: 'nickname',
  })
  @IsString()
  public nickname: string;
}
