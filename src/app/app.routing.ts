import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AdminComponent } from './admin/admin.component';
import { NewProjectComponent } from './new-project/new-project.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomepageComponent
   },
   {
     path: 'marketplace',
     component: MarketplaceComponent
   },
   {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
   path: 'newProject',
   component: NewProjectComponent
  },
  {
   path: 'admin',
   component: AdminComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
