"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
exports.userRouter = express.Router();
/* GET users listing. */
exports.userRouter.get('/', function (req, res, next) {
    res.send('user!');
});
