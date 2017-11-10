import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { SushiboxComponent } from './sushibox/sushibox.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'carta', component: MenuComponent },
  { path: 'promociones', component: PromotionsComponent },
  { path: 'sushibox', component: SushiboxComponent }
];
