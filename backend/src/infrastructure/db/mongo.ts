import { Db, MongoClient } from "mongodb";

let db: Db | null = null;

export async function connectToMongo(): Promise<void> {
  const url = process.env.MONGO_URL;
  const dbName = process.env.MONGO_DB_NAME;

  if (!url) throw new Error("MONGO_URL is not set");
  if (!dbName) throw new Error("MONGO_DB_NAME is not set");

  const client = new MongoClient(url);
  await client.connect();
  db = client.db(dbName);

  console.log("Connected to MongoDB");
}

export function getDb(): Db {
  if (!db) throw new Error("MongoDB not initialized. Call connectToMongo() first.");
  return db;
}
