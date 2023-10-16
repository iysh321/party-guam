export class User {
  constructor(
    private account: string,
    private nickname: string,
    private email: string,
  ) {}

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
