export declare class UserResponseDto {
    id: number;
    account: string;
    email: string;
    nickname: string;
    image: string;
    isParty: boolean;
    createdAt: Date;
}
export declare class UsersResponseDto {
    data: UserResponseDto[];
    count: number;
}
