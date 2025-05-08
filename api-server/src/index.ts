import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import pino from 'pino';

dotenv.config({path : path.resolve(__dirname, '../.env')});


const app = express();
const router = express.Router();
const logger = pino();
const PORT = 5000;

app.set("x-powered-by", false);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


(async function () {
    try{
        logger.info("Starting server...");
        app.listen(PORT,"0.0.0.0", () => {
            logger.info(`Server is running on : http://0.0.0.0:${PORT}`);
        });
    }catch(err){
        logger.error(`An error occured during application startup :  ${err.message || err}.`);
    }
})();