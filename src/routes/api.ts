import { Router } from "express";

import * as crypto from "crypto";

import { User, Post } from "../models";

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
  const createUser = await User.create({
    username: req.body.username,
    email: req.body.email,
    salt: salt,
    password: password,
    confirmed: false,
    administrator: false,
    boardMember: false,
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
