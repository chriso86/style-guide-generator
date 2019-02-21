"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
exports.fontRouter = express.Router();
/* GET users listing. */
exports.fontRouter.get('/', function (req, res, next) {
    res.send('font!');
});
