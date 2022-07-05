import { Router } from "express";

import scrypt from 'scrypt';

import { User, Post } from "../models";

const apiRouter: Router = Router();

apiRouter.get("/", (req, res) => {
  res.send({
    Hello: "World!",
  });
});

apiRouter.post("/createUser", async (req, res) => {
  const generateSalt = () => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 32; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result1;
  }
  const salt = generateSalt();
  const password = (await scrypt.hash(req.body.password, {"N":1048576,"r":8,"p":1}, 64, salt)).toString("hex");
  await User.create({
    name: req.body.name,
    email: req.body.email,
    salt,
    password: password,
  })
  return res.send({
    Hello: "World!",
  });
});

apiRouter.get("/getUsers", async (req, res) => {
  return res.send(await User.find({}));
});

apiRouter.get("/getPosts", async (req, res) => {
  return res.send(await Post.find({}));
});

export default apiRouter;
