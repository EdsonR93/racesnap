import jwt from "jsonwebtoken";

export class TokenService {
    constructor(
        private accessSecret: string,
        private refreshSecret: string,
        private accessTtlSeconds: number,
        private refreshTtlSeconds: number
    ){}

    signAccess(payload: object) {
    return jwt.sign(payload, this.accessSecret, { expiresIn: this.accessTtlSeconds });
  }

  signRefresh(payload: object) {
    return jwt.sign(payload, this.refreshSecret, { expiresIn: this.refreshTtlSeconds });
  }

  verifyAccess<T>(token: string) {
    return jwt.verify(token, this.accessSecret) as T;
  }

  verifyRefresh<T>(token: string) {
    return jwt.verify(token, this.refreshSecret) as T;
  }
}