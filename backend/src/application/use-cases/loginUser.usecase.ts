import bcrypt from "bcrypt";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { AuthTokens, LoginInput, PublicUser } from "../dtos/auth.dto";
import { TokenService } from "../services/TokenService";

export class LoginUserUseCase {
  constructor(private users: UserRepository, private tokens: TokenService) {}

  async execute(input: LoginInput): Promise<{ user: PublicUser; tokens: AuthTokens }> {
    const email = input.email.toLowerCase().trim();
    const user = await this.users.findByEmail(email);
    if (!user) throw new Error("INVALID_CREDENTIALS");

    const ok = await bcrypt.compare(input.password, user.passwordHash);
    if (!ok) throw new Error("INVALID_CREDENTIALS");

    const payload = { sub: user.id, roles: user.roles };
    const accessToken = this.tokens.signAccess(payload);
    const refreshToken = this.tokens.signRefresh(payload);

    return {
      user: { id: user.id, email: user.email, roles: user.roles },
      tokens: { accessToken, refreshToken },
    };
  }
}