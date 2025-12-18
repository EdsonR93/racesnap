import { Event } from "../entities/Event";

export interface EventRepository {
  create(event: Event): Promise<void>;
  // (we’ll add these later)
  // findById(id: string): Promise<Event | null>;
  // listByAdmin(adminId: string): Promise<Event[]>;
  // delete(id: string): Promise<void>;
}