import { Router } from 'express';

import { User, Post } from '../models';

const apiRouter: Router = Router();

apiRouter.get('/', (req, res) => {
    res.send({
        Hello: "World!"
    });
})

apiRouter.get('/getUsers', async (req, res) => {
    return res.send((await User.find({})))
})

apiRouter.get('/getPosts', async (req, res) => {
    return res.send((await Post.find({})))
})

export default apiRouter;