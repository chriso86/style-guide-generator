import * as admin from 'firebase-admin';
// @ts-ignore
import * as serviceAccount from './service-account-key.json';

const obj = {};
// @ts-ignore
Object.assign(obj, serviceAccount);

admin.initializeApp({
  credential: admin.credential.cert(obj)
});

export const connection = admin;
