export declare class Follow {
    userId: number;
    followId: number;
    constructor(userId: number, followId: number);
    getUserId(): Readonly<number>;
    getFollowId(): Readonly<number>;
}
