import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ResourcesComponent} from './resources.component';
import {ResourcesListComponent} from './resources-list/resources-list.component';
import {ResourceAddComponent} from './resource-add/resource-add.component';
import {ResourceDetailsComponent} from './resource-details/resource-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ResourcesListComponent
      },
      {
        path: 'add',
        component: ResourceAddComponent
      },
      {
        path: 'edit/:id',
        component: ResourceAddComponent
      },
      {
        path: 'details/:id',
        component: ResourceDetailsComponent
      }
    ]
  }
];

export const ResourcesRouting: ModuleWithProviders = RouterModule.forChild(routes);
