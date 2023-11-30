export class Party {
  constructor(
    public id: number,
    public title: string,
    public contents: string,
  ) {}

  getId(): Readonly<number> {
    return this.id;
  }
}
