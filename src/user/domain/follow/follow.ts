export class Follow {
  constructor(
    public id: number,
    public followerId: number,
    public followingId: number,
  ) {}

  getId(): Readonly<number> {
    return this.id;
  }
}
