import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


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
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
