import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class FollowQueryRequestDto {
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
    enum: ['follower', 'following'],
    description: '팔로워, 팔로잉 선택하면 해당 리스트를 보여주게 됨',
  })
  @IsNotEmpty()
  @IsString()
  @IsIn(['follower', 'following'])
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
