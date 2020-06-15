import * as admin from 'firebase-admin';
import {connection} from './connection';

export class Db {
    private static _db?: admin.firestore.Firestore; // Optional because TypeScript

    private constructor() {
    }

    public static get(): admin.firestore.Firestore {
        if (!this._db) {
            this._db = connection.firestore();
        }

        return this._db;
    }
}
