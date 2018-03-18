import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css'],
})
export class MovieHomeComponent implements OnInit {
  movieData;
  togglefav = false;
  PREFIX_URL = 'https://image.tmdb.org/t/p/w342';
  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.movieService.getMovieDetailsFromIMDB().subscribe(data => {
      let myData = data['results'];
      myData.forEach(movie => {
        if (movie.poster_path !== null) {
          movie.poster_path = this.PREFIX_URL + movie.poster_path;
          movie.favorite = false;
        }
        if(movie.poster_path == null){
          movie.poster_path = "http://www.instyprintsmt.com/images/custom/placeholder.jpg";
          movie.favorite = false;
        }
      });
      this.movieData = data['results'];
      this.movieService.storeMovies(this.movieData);
    });
  }

  addToFav(movie) {
    this.togglefav = !this.togglefav;
  }
  selectTile(movie) {
    this.router.navigate([movie.id], { relativeTo: this.route });
  }
}
