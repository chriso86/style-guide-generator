import { Injectable } from '@angular/core';
import { Loader } from './loader.model';
import {NumberHelper} from '../helpers/number';

@Injectable()
export class LoaderService {
    private _loaders: Loader[] = [];

    buildLoader(states: string[] = [], defaultState: string = ''): Loader {
        const loaderId = NumberHelper.getNextId(this._loaders, 'id');
        const loader = new Loader(loaderId, states, defaultState);

        this._loaders.push(loader);

        return loader;
    }

    getLoaders(): Loader[] {
        return this._loaders;
    }

    getLoaderById(id: number) {
        return this._loaders.find(loader => loader.id === id);;
    }

    removeLoader(id: number): void {
        const loaderIndex = this._loaders.findIndex(loader => loader.id === id);

        if (loaderIndex > -1) {
            this._loaders.splice(loaderIndex, 1);
        }
    }

    invalidateAllLoaders(): void {
        this._loaders.forEach(loader => loader.valid = false);
    }

    clearAllLoaders(): void {
        this._loaders.forEach(loader => loader.unsubscribeAll());

        this._loaders.length = 0;
    }
}
