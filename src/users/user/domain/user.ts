export class User {
  constructor(
    private id: string,
    private nickname: string,
    private email: string,
    private password: string,
    private signupVerifyToken: string,
  ) {}

  getId(): Readonly<string> {
    return this.id;
  }

  getName(): Readonly<string> {
    return this.nickname;
  }

  getEmail(): Readonly<string> {
    return this.email;
  }
}
