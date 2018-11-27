import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './resources.component';
import {ResourcesRouting} from './resources.routing';

import {ResourcesListComponent} from './resources-list/resources-list.component';
import {RestService} from './services/rest.service';
import {ResourceAddComponent} from './resource-add/resource-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResourceDetailsComponent} from './resource-details/resource-details.component';
import {AddBorrowComponent} from './resource-details/add-borrow/add-borrow.component';
import {OrderModule} from 'ngx-order-pipe';
import {ResourcesMenuComponent} from './resources-menu/resources-menu.component';
import {ResourcesService} from './services/resources.service';
import {NormalListComponent} from './resources-list/normal-list/normal-list.component';
import {PicturesListComponent} from './resources-list/pictures-list/pictures-list.component';
import {FullImageComponent} from './resource-details/full-image/full-image.component';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {TitleListComponent} from './resources-list/title-list/title-list.component';
import {AccordionModule, ModalModule, TabsModule} from 'ngx-bootstrap';
import {DeleteBorrowConfirmComponent} from './resource-details/delete-borrow-confirm/delete-borrow-confirm.component';
import {DeleteResourceConfirmComponent} from './resource-add/delete-resurce-confirm/delete-resurce-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    ResourcesRouting,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    AngularSvgIconModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot()
  ],
  declarations: [
    ResourcesComponent,
    ResourcesListComponent,
    ResourceAddComponent,
    ResourceDetailsComponent,
    AddBorrowComponent,
    ResourcesMenuComponent,
    NormalListComponent,
    PicturesListComponent,
    FullImageComponent,
    TitleListComponent,
    DeleteBorrowConfirmComponent,
    DeleteResourceConfirmComponent
  ],
  providers: [
    RestService,
    ResourcesService
  ],
  entryComponents: [
    AddBorrowComponent,
    DeleteBorrowConfirmComponent,
    DeleteResourceConfirmComponent
  ]
})
export class ResourcesModule {
}
