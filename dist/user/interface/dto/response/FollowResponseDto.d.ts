export declare class FollowCountsResponseDto {
    followerCount: number;
    followingCount: number;
}
export declare class FollowUserResponseDto {
    nickname: number;
    image: string;
}
export declare class FollowResponseDto {
    counts: FollowCountsResponseDto;
    users: FollowUserResponseDto;
}
