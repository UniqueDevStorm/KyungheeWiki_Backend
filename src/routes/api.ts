import { Router } from "express";

import fs from 'fs';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import * as crypto from "crypto";

import { User, Post } from "../models";
import * as path from "path";

const apiRouter: Router = Router();

apiRouter.get("/", (req, res) => {
  res.send({
    Hello: "World!",
  });
});

apiRouter.post("/createUser", async (req, res) => {
  const salt = crypto.randomBytes(128).toString("base64");
  const password = crypto
    .createHash("sha512")
    .update(req.body.password + salt)
    .digest("hex");
  const _id = new mongoose.Types.ObjectId();
  const privateKey = fs.readFileSync(path.join(__dirname, "../../config/private.key"));
  const token = jwt.sign({
    id: _id,
  }, privateKey, { algorithm: 'RS256'});
  const createUser = await User.create({
    _id,
    username: req.body.username,
    email: req.body.email,
    salt: salt,
    password: password,
    confirmed: false,
    administrator: false,
    boardMember: false,
    token: token,
  });
  res.send(createUser);
});

apiRouter.get("/getUsers", async (req, res) => {
  return res.send(await User.find({}));
});

apiRouter.get("/getPosts", async (req, res) => {
  return res.send(await Post.find({}));
});

export default apiRouter;
