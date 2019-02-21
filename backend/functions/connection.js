"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
// @ts-ignore
const serviceAccount = require("./service-account-key.json");
const obj = {};
// @ts-ignore
Object.assign(obj, serviceAccount);
admin.initializeApp({
    credential: admin.credential.cert(obj)
});
exports.connection = admin;
