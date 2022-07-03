import express, { Express } from 'express';

import mongoose from 'mongoose';

import router from './routes';

require('dotenv').config();

const app: Express = express();
app.use(router);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
}).on('error', (err: Error) => {
    console.log(err);
    process.exit(1);
})