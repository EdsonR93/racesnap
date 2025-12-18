import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectToMongo} from './infrastructure/db/mongo';

dotenv.config();

async function bootstrap(){
    const app = express();
    app.use(cors());
    app.use(express.json());

    await connectToMongo();

    app.get('/health', (_, res) => {
        res.json({status: 'ok'});
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log('API running on ${port}'));
}

bootstrap();