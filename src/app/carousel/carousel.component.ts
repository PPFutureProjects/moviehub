import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { carousel } from '../welcome/welcome.component.data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  imgags: Object[];
  public carouselTileOneItems: Array<any> = [];
  public carouselTileOne: NgxCarousel;

  constructor() {}

  ngOnInit() {
    this.imgags = carousel;
    this.carouselTileOne = {
      grid: { xs: 2, sm: 3, md: 4, lg: 4, all: 0 },
      speed: 600,
      interval: 3000,
      point: {
        visible: true,
      },
      load: 12,
      loop: true,
      touch: true,
      easing: 'ease',
      animation: 'lazy',
    };
    for (let i = 0; i < this.imgags.length; i++) {
      this.carouselTileOneItems.push(this.imgags[i]);
    }
  }
}
