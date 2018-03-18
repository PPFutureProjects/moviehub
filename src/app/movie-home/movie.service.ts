import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MovieService {
  private API_KEY = '1b8119d4431839ffdcc0d95509db9d8d';
  private MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=wonder&page=1`;

  constructor(private httpClient: HttpClient, private router: Router) {}

  movies = [];
  favorites = [];
  movieSel: Subject<any>;

  storeMovies(movies) {
    this.movies = movies;
  }

  getMovies() {
    return this.movies;
  }

  getMovieDetailsFromIMDB() {
    return this.httpClient.get(this.MOVIE_URL);
  }

  addTofavorites(movie) {
    this.favorites.push(movie);
    this.router.navigate(['/movies']);
  }

  showfavorites() {
    return this.favorites;
  }

  getMovieDetailForID(id) {
    return this.movies.filter(m => m.id === id);
  }
}
