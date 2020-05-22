import { NgModule } from '@angular/core';
import { LoaderService } from './loader.service';
import { LoaderComponent } from './loader.component';

@NgModule({
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ],
    providers: [
        LoaderService
    ]
})
export class AbacusLoaderModule {
}
