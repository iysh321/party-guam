export declare class Follow {
    id: number;
    followerId: number;
    followingId: number;
    constructor(id: number, followerId: number, followingId: number);
    getId(): Readonly<number>;
}
