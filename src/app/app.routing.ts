import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';


const appRoutes: Routes = [
  {
     path: '',
     component: HomepageComponent
   },
   {
     path: 'marketplace',
     component: MarketplaceComponent
   }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
