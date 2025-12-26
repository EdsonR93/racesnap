export type UserRole = "SUPER_ADMIN" | "EVENT_ADMIN" | "PHOTOGRAPHER" | "PARTICIPANT";

export class User {
  constructor(
    public id: string,
    public email: string,
    public passwordHash: string,
    public roles: UserRole[],
    public createdAt: Date
  ) {}
}