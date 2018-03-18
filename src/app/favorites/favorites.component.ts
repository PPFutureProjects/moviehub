import { MovieService } from './../movie-home/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favArray = [];
  constructor(private movieSvc: MovieService) {}

  ngOnInit() {
    this.favArray = this.movieSvc.showfavorites();
  }
}
