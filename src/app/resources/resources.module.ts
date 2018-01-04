import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './resources.component';
import {ResourcesRouting} from './resources.routing';
import {
  MatButtonModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {ResourcesListComponent} from './resources-list/resources-list.component';
import {RestService} from './rest.service';
import {ResourceAddComponent} from './resource-add/resource-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResourceDetailsComponent} from './resource-details/resource-details.component';
import { AddBorrowComponent } from './resource-details/add-borrow/add-borrow.component';
import {OrderModule} from 'ngx-order-pipe';

@NgModule({
  imports: [
    CommonModule,
    ResourcesRouting,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatExpansionModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    OrderModule
  ],
  declarations: [
    ResourcesComponent,
    ResourcesListComponent,
    ResourceAddComponent,
    ResourceDetailsComponent,
    AddBorrowComponent],
  providers: [
    RestService
  ],
  entryComponents: [AddBorrowComponent]
})
export class ResourcesModule {
}
