import { Express } from 'express';
import express from 'express';
import cors from 'cors';
import colors from 'colors';
import notenv from 'dotenv';
import db from './config/db';
import { v2 as cloudinary } from 'cloudinary';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';

notenv.config();

const PORT = process.env.PORT || 5000;
const app: Express = express();
const corsOptions: cors.CorsOptions = {
    origin: "*",
};
app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));

db();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

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
