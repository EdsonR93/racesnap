import {Router} from "express";
import { CreateEventUseCase } from "../../../application/use-cases/createEvent.usecase";
import { EventMongoRepository } from "../../db/event.mongo.repository";
import { createEventController } from "../controllers/createEvent.controller";

export const eventRoutes = Router();

const repo = new EventMongoRepository();
const createUseCase = new CreateEventUseCase(repo);

eventRoutes.post("/",createEventController(createUseCase));