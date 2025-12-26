import bcrypt from "bcrypt";
import crypto from "crypto";
import { User, UserRole } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { PublicUser, RegisterInput } from "../dtos/auth.dto";

export class RegisterUserUseCase {
    constructor(private users: UserRepository){}

    async execute(input:RegisterInput): Promise<PublicUser>{
        const email = input.email.toLowerCase().trim();
        const existing = await this.users.findByEmail(email);
        if(existing) throw new Error("EMAIL_ALREADY_IN_USE");

        const passwordHash = await bcrypt.hash(input.password,12);
        const roles: UserRole[] = (input.roles as UserRole[] | undefined) ?? ["PARTICIPANT"];

        const user = new User(crypto.randomUUID(), email, passwordHash, roles, new Date());
        await this.users.create(user);

        return { id: user.id, email: user.email, roles: user.roles };
    }
}