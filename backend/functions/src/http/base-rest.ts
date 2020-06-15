import {Db} from '../db';
import * as admin from 'firebase-admin';
import * as Exception from './exception';
import {BaseEntity} from '../base-entity';

export class BaseRest<T extends BaseEntity> {
    protected _collection: admin.firestore.CollectionReference<admin.firestore.DocumentData>;

    constructor(collectionName: string) {
        const db = Db.get();

        this._collection = db.collection(collectionName);
    }

    /***
     * Add a document at a new reference and return the write result
     * @param documentData
     */
    public async add(documentData: T): Promise<string> {
        const documentReference = this._collection.doc();

        await documentReference.set(documentData)
            .catch(_ => {
                throw Exception.DOCUMENT_ADD_FAILED;
            });

        return documentReference.id;
    }

    /***
     * Add a document at a new reference and return the write result
     * @param documentData
     * @param id
     */
    public async update(documentData: T, id: string): Promise<admin.firestore.WriteResult>  {
        const document = this._collection.doc(id);

        return await document.set(documentData)
            .catch(_ => {
                throw Exception.DOCUMENT_UPDATE_FAILED;
            });
    }

    /***
     * Return a document matching a document reference or null if the document doesn't exist
     * @param id
     */
    public async getOne(id: string): Promise<T | null> {
        let item: T | null = null;

        await this._collection
            .doc(id)
            .get()
            .then((doc: admin.firestore.DocumentSnapshot) => {
                if (doc.exists) {
                    item = doc.data() as T;
                }
            })
            .catch(_ => {
                throw Exception.DOCUMENT_GET_ONE_FAILED;
            });

        return item;
    }

    /***
     * Return all documents inside the collection
     */
    public async getAll(): Promise<T[]> {
        let items: T[] = [];

        await this._collection
            .get()
            .then((snapshot: admin.firestore.QuerySnapshot) => {
                const docs = snapshot.docs;

                if (docs && docs.length) {
                    items = docs.map(doc => (doc.data() as T));
                }
            })
            .catch(_ => {
                throw Exception.DOCUMENT_GET_ALL_FAILED;
            });

        return items;
    }

    /***
     * Removes a document with ID from collection and returns success boolean
     * @param id
     */
    public async remove(id: string): Promise<boolean> {
        await this._collection.doc(id)
            .delete()
            .catch(_ => {
                throw Exception.DOCUMENT_DELETE_FAILED;
            });

        return true;
    }
}
