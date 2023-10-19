export class User {
  constructor(
    private id: number,
    private account: string,
    private nickname: string,
    private email: string,
  ) {}

  getId(): Readonly<number> {
    return this.id;
  }

  getAccount(): Readonly<string> {
    return this.account;
  }

  getNickname(): Readonly<string> {
    return this.nickname;
  }

  getEmail(): Readonly<string> {
    return this.email;
  }
}
