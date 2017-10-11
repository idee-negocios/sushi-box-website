import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SushiboxComponent } from './sushibox/sushibox.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

// Carousel
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SushiboxComponent,
    PromotionsComponent,
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgxCarouselModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
