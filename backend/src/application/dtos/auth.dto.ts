export type RegisterInput = {email:string; password:string; roles?:string[]};
export type LoginInput = { email: string; password: string };

export type AuthTokens = { accessToken: string; refreshToken: string };
export type PublicUser = { id: string; email: string; roles: string[] };