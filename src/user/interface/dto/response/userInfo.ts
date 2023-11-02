import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserResponseDto {
  @Expose()
  id: number;

  @Expose()
  account: string;

  @Expose()
  email: string;

  @Expose()
  nickname: string;

  @Expose()
  image: string;

  @Expose()
  isParty: boolean;
}
