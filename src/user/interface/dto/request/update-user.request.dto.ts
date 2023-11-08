import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateUserRequestDto {
  @IsOptional()
  @IsBoolean()
  readonly is_party: boolean;

  @IsOptional()
  @IsString()
  readonly meeting_type: string;

  @IsOptional()
  @IsString()
  readonly meeting_week: string;

  @IsOptional()
  @IsString()
  readonly meeting_time: string;

  @IsOptional()
  @IsString()
  readonly mbti: string;
}
