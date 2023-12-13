import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

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

  @ApiProperty({
    example: 1,
    description: '글쓴이 참여할 포지션 position id(pk)',
  })
  @IsNotEmpty()
  @IsInt()
  readonly positionId: number;
}
