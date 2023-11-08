import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UserQueryRequestDto {
  @ApiProperty({
    example: 1,
    description: 'page',
  })
  @IsNotEmpty()
  @IsInt()
  public page: number;

  @ApiProperty({
    example: 5,
    description: '최대 조회 수',
  })
  @IsNotEmpty()
  @IsInt()
  public limit: number;

  @ApiProperty({
    enum: ['createdAt'],
    description: 'order 조회 기준',
  })
  @IsNotEmpty()
  @IsString()
  @IsIn(['createdAt'])
  public sort: string;

  @ApiProperty({
    enum: ['ASC', 'DESC'],
    description: '오름, 내림차순',
  })
  @IsNotEmpty()
  @IsString()
  @IsIn(['ASC', 'DESC'])
  public order: 'ASC' | 'DESC';
}
