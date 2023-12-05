export class Follow {
  constructor(
    public followerId: number,
    public followingId: number,
  ) {}

  getId(): Readonly<number> {
    return this.followerId;
  }
}
