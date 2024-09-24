import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import connectDB from './config/db';
import router from './routes/router';
import cors from 'cors'
dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', router);
const PORT = process.env.PORT || 5000;
connectDB()
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});