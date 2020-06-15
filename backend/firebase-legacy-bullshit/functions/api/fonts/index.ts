import * as express from 'express';
import { connection } from '../../connection';

export const fontRouter = express.Router();

/* GET users listing. */
fontRouter.get('/', function(req, res, next) {
  res.send('font!');
});
