import {BaseRest} from '../http/base-rest';
import {Color} from './color';
import * as Exception from './exception';
import { Response } from 'firebase-functions';
import * as admin from 'firebase-admin';

export class ColorController extends BaseRest<Color> {
    constructor() {
        super('colors');
    }

    public createColor(color: Color, response: Response) {
        if (!color) {
            throw Exception.BAD_COLOR_ARGS;
        }

        this.add(color)
            .then((id: string) => {
                response.send(id);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    public getAllColorsForProject(projectId: string, response: Response) {
        this._collection
            .where('projectId', '==', projectId)
            .get()
            .then((snapshot: admin.firestore.QuerySnapshot) => {
                const docs = snapshot.docs;
                let colors: Color[] = [];

                if (docs && docs.length) {
                    colors = docs.map(doc => doc.data() as Color);
                }

                response.send(colors);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    public getColorById(id: string, response: Response) {
        if (!id) {
            throw Exception.INVALID_ID_ARGS;
        }

        this.getOne(id)
            .then((color: Color | null) => {
                if (!color) {
                    response.send(Exception.COLOR_DOESNT_EXIST);

                    return;
                }

                response.send(color);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    public updateColor(color: Color, response: Response) {
        if (!color) {
            throw Exception.BAD_COLOR_ARGS;
        }

        this.update(color, color.id)
            .then(_ => {
                response.send(true);
            })
            .catch(error => {
                throw new Error(error);
            });
    }

    public removeColor(id: string, response: Response) {
        if (!id) {
            throw Exception.INVALID_ID_ARGS;
        }

        this.remove(id)
            .then((result: boolean) => {
                response.send(result);
            })
            .catch(error => {
                throw new Error(error);
            });
    }
}
