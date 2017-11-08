import { Component, OnInit } from '@angular/core';

// Carousel
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;
  
   ngOnInit() {
    this.carouselTileItems = ["s1","s2","s3","s4","s5","s6","s7","s8"];
    
       this.carouselTile = {
         grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
         slide: 1,
         speed: 200,
         interval: 500,
         animation: 'lazy',
         point: {
           visible: true
         },
         load: 2,
         touch: true,
         easing: 'ease'
       }
   }

}
