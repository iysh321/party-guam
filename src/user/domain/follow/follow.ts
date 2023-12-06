export class Follow {
  constructor(
    public userId: number,
    public followId: number,
  ) {}

  getFollowId(): Readonly<number> {
    return this.followId;
  }
}
