import { TestBed, inject } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let httpClientSpy;
  let routerSpy;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    service = new MovieService(httpClientSpy, routerSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store movies', () => {
    let movieObj = [
      { adult: false, backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRXAk4.jpg' },
    ];
    service.storeMovies(movieObj);
    expect(service.movies).toBe(movieObj);
  });

  it('should get movies', () => {
    let movieObjArr = [
      { adult: false, backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRXAk4.jpg' },
      { adult: true, backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRX555.jpg' },
    ];
    service.movies = movieObjArr;
    expect(service.getMovies()).toBe(movieObjArr);
  });

  it('should fetch movies from an API', () => {
    let API_KEY = '1b8119d4431839ffdcc0d95509db9d8d';
    let MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=wonder&page=1`;

    service.getMovieDetailsFromIMDB();

    expect(httpClientSpy.get).toHaveBeenCalledWith(MOVIE_URL);
  });

  it('should save the selected movie to favorites and change the route', () => {
    service.favorites = [];
    let movieObj = {
      adult: false,
      backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRXAk4.jpg',
    };
    service.addTofavorites(movieObj);
    expect(service.favorites.length).toBe(1);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/movies']);
  });

  it('should show favorites', () => {
    let movieObjArr = [
      { adult: false, backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRXAk4.jpg' },
      { adult: true, backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRX555.jpg' },
    ];
    service.favorites = movieObjArr;
    expect(service.showfavorites()).toBe(movieObjArr);
  });

  it('should show the detail of a particular movie based on an ID', () => {
    let movieObjArr = [
      {
        id: 1,
        adult: false,
        backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRXAk4.jpg',
      },
      { id: 2, adult: true, backdrop_path: '/4rsrxYDfIzvtAsIE9wevxPRX555.jpg' },
    ];
    service.movies = movieObjArr;
    let result = service.getMovieDetailForID(1);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(movieObjArr[0]);
  });
});
