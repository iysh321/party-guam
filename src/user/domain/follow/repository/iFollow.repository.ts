import { Follow } from '../follow';

export interface IFollowRepository {
  create: (nickname: string, followingId: number) => Promise<Follow>;
}
