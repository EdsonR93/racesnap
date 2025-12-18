import { getDb } from "./mongo";
import { EventRepository } from "../../domain/repositories/EventRepository";
import { Event } from "../../domain/entities/Event";

export class EventMongoRepository implements EventRepository {
  async create(event: Event) {
    await getDb().collection("events").insertOne(event);
  }
}