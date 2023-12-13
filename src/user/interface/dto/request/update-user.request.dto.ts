import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { MeetingTimeType, MeetingType, MeetingWeekType } from 'src/user/infra/db/entity/user.entity';

export class UpdateUserRequestDto {
  @ApiPropertyOptional({
    example: true,
    description: '모임참석여부',
  })
  @IsOptional()
  @IsBoolean()
  readonly isParty: boolean;

  @ApiPropertyOptional({
    example: MeetingType.OFFLINE,
    description: '모임참석형태',
    enum: MeetingType,
  })
  @IsOptional()
  @IsString()
  readonly meetingType: string;

  @ApiPropertyOptional({
    example: MeetingWeekType.WEEKDAY,
    description: '모임참석 주중, 주말',
    enum: MeetingWeekType,
  })
  @IsOptional()
  @IsString()
  readonly meetingWeek: string;

  @ApiPropertyOptional({
    example: MeetingTimeType.AM,
    description: '모임참석 시간',
    enum: MeetingTimeType,
  })
  @IsOptional()
  @IsString()
  readonly meetingTime: string;

  @ApiPropertyOptional({
    example: 'intp',
    description: 'mbti',
    enum: [
      'entp',
      'enfp',
      'entj',
      'enfj',
      'estp',
      'esfp',
      'estj',
      'esfj',
      'intp',
      'infp',
      'intj',
      'infj',
      'istp',
      'isfp',
      'istj',
      'isfj',
    ],
  })
  @IsOptional()
  @IsString()
  readonly mbti: string;

  @ApiPropertyOptional({
    example: [1, 2],
    description: 'skill id(pk)',
  })
  @IsOptional()
  @IsInt()
  readonly skillIds: number[];

  @ApiPropertyOptional({
    example: 1,
    description: 'position id(pk)',
  })
  @IsOptional()
  @IsInt()
  readonly positionId: number[];
}
