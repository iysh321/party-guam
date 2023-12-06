import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponseDto {
  @Expose()
  @ApiProperty()
  followerCount: number;

  @Expose()
  @ApiProperty()
  followingCount: number;

  @Expose()
  @ApiProperty()
  nickname: string;

  @Expose()
  @ApiProperty()
  image: string;
}
