import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePartyRequestDto {
  @ApiProperty({
    example: '파티구함',
    description: '제목',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    example: '풀스텍 구함',
    description: '본문',
  })
  @IsNotEmpty()
  @IsString()
  readonly content: string;
}
