"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const functions = require("firebase-functions");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersApi = require("./api/users/index");
const colorsApi = require("./api/colors/index");
const fontsApi = require("./api/fonts/index");
const authApi = require("./api/auth/index");
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.disable('x-powered-by');
app.use('/users', usersApi.userRouter);
app.use('/colors', colorsApi.colorRouter);
app.use('/fonts', fontsApi.fontRouter);
app.use('/auth', authApi.authRouter);
// @ts-ignore
app.get('*', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.status(404).send('This route does not exist.');
}));
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + (process.env.PORT || 3000));
});
exports.api = functions.https.onRequest(app);
