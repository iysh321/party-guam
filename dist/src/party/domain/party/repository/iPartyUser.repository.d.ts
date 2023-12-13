export interface IPartyUserRepository {
    create: (userId: number, partyId: number, postionId: number) => Promise<void>;
}
