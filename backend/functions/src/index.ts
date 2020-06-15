import {ColorController} from './colors/color-controller';
import { Request, Response, https} from 'firebase-functions';
import {Color} from './colors/color';

// Colors
const colorController = new ColorController();

export const createColor = https.onRequest((request: Request, response: Response<string>) => {
    colorController.createColor(request.body.color, response);
});
export const updateColor = https.onRequest((request: Request, response: Response<boolean>) => {
    colorController.updateColor(request.body.color, response);
});
export const getColors = https.onRequest((request: Request, response: Response<Color[]>) => {
    colorController.getAllColorsForProject(request.query.projectId as string, response);
});
export const getColor = https.onRequest((request: Request, response: Response<Color>) => {
    colorController.getColorById(request.query.id as string, response);
});
export const removeColor = https.onRequest((request: Request, response: Response<boolean>) => {
    colorController.removeColor(request.query.id as string, response);
});
