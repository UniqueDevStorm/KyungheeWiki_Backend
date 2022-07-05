import express, { Express } from "express";

import mongoose from "mongoose";

import router from "./routes";
import config from '../config/config.json';

const app: Express = express();
app.use(express.json());
app.use(router);

app
  .listen(config.PORT, () => {
    mongoose
      .connect(config.MONGODB_URI)
      .then(() => console.log("Connected to MongoDB!"));
  })
  .on("error", (err: Error) => {
    console.log(err);
    process.exit(1);
  })
  .on("listening", () => {
    console.log(`Server is running on port ${config.PORT}!`);
  });
