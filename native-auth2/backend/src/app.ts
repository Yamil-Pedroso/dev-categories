import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import colors from 'colors';
import notenv from 'dotenv';
import db from './config/db';

notenv.config();

const PORT = process.env.PORT || 5000;
const app: Express = express();
const corsOptions: cors.CorsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));

db();

colors.enable();

// use Routes
import userRoutes from './routes/user';

app.use(express.json());

app.use('/api/v1', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.yellow.bold));
