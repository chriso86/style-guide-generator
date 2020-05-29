import {NgModule} from '@angular/core';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';
import {CreateProjectDialogComponent} from './create-project-dialog/create-project-dialog.component';
import {ProjectApiGateway} from './rest/project-api.gateway';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AddNewItemComponent,
    CreateProjectDialogComponent
  ],
  exports: [
    AddNewItemComponent,
    CreateProjectDialogComponent
  ],
  imports: [
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    ProjectApiGateway
  ]
})
export class SggProjectCoreModule {
}
