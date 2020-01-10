import * as express from 'express';
import { connection } from '../../connection';

export const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.send('user!');
});
