import { Event } from "../../domain/entities/Event";
import { EventRepository } from "../../domain/repositories/EventRepository";

export class CreateEventUseCase {
  constructor(private eventRepo: EventRepository) {}

  async execute(input: { name: string; createdBy: string }) {
    const event = new Event(
      crypto.randomUUID(),
      input.name,
      input.createdBy,
      new Date()
    );

    await this.eventRepo.create(event);
    return event;
  }
}