import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectToMongo} from './infrastructure/db/mongo';
import { eventRoutes } from "./infrastructure/http/routes/events.routes";



dotenv.config({ path: process.env.ENV_FILE || ".env.dev" });

async function bootstrap(){
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use('/events', eventRoutes);
    
    await connectToMongo();

    app.get('/health', (_, res) => {
        res.json({status: 'ok'});
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log('API running on ${port}'));
}

bootstrap();