export enum AccessLevel {
  User = 'user',
  Admin = 'admin',
}

export class User {
  constructor(
    public username: string,
    public password: string,
    public accessLevel: AccessLevel
  ) {}
}
