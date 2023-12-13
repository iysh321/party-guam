import { Party } from '../party';
export interface IPartyRepository {
    create: (userId: number, title: string, contents: string) => Promise<Party>;
}
