import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-home/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  currentMovieList;
  currentId;
  selectedMovie;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentId = +this.route.snapshot.params['id'];
    this.selectedMovie = this.movieService.getMovieDetailForID(
      this.currentId
    )[0];
  }

  addToFavorites(selectedMovie) {
    this.movieService.addTofavorites(selectedMovie);
  }
}
