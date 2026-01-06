import { getDb } from "./mongo";
import { Collection, ObjectId, WithId } from "mongodb";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class UserMongoRepository implements UserRepository {
    async create(user: User) {
        await getDb().collection<User>("users").insertOne(user);
    }

    async findByEmail (email: string): Promise<User | null> {
        let user: User | null = null;
        try {
            user = await getDb().collection<User>("users").findOne({ email });
        } catch(error){
            console.error("An error occurred while trying to fetch data from database: ", error);
        } finally {
            return user;
        }
    }

    async findById (id: string): Promise<User | null> {
        let user: User | null = null;
        let objetId = new ObjectId(id);
        try {
            user = await getDb().collection<User>("users").findOne({ _id: objetId });
        } catch(error){
            console.error("An error occurred while trying to fetch data from database: ", error);
        } finally {
            return user;
        }
    }
}
