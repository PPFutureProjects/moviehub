import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { carousel } from './welcome.component.data';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  ngOnInit(): void {}
}
