import * as express from 'express';
import * as functions from 'firebase-functions';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as usersApi from './api/users/index';
import * as colorsApi from './api/colors/index';
import * as fontsApi from './api/fonts/index';
import * as authApi from './api/auth/index';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.disable('x-powered-by');

app.use('/users', usersApi.userRouter);
app.use('/colors', colorsApi.colorRouter);
app.use('/fonts', fontsApi.fontRouter);
app.use('/auth', authApi.authRouter);

// @ts-ignore
app.get('*', async (req: express.Request, res: express.Response): Promise<any> => {
  res.status(404).send('This route does not exist.');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + (process.env.PORT || 3000));
});

exports.api = functions.https.onRequest(app);
