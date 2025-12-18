import {MongoClient} from "mongodb";

let db:any;

export async function connectToMongo() {
    const client = new MongoClient(process.env.MONGO_URL!);
    await client.connect();
    db = client.db(process.env.MONGO_DB_NAME);
    console.log("Connected tp MongoDB");
    
}

export const getDb = () => db;