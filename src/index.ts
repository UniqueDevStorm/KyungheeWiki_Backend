import express, { Express } from "express";

import mongoose from "mongoose";

import router from "./routes";

require("dotenv").config();

const app: Express = express();
app.use(express.json());
app.use(router);

app
  .listen(process.env.PORT, () => {
    mongoose
      .connect(process.env.MONGO_URI!)
      .then(() => console.log("Connected to MongoDB!"));
  })
  .on("error", (err: Error) => {
    console.log(err);
    process.exit(1);
  })
  .on("listening", () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
  });
