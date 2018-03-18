import { Router, ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { MovieHomeComponent } from './movie-home.component';
import { MovieService } from './movie.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { movieData } from './mock-movie-data';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';

describe('MovieHomeComponent', () => {
  let component: MovieHomeComponent;
  let fixture: ComponentFixture<MovieHomeComponent>;

  let MockMovieService = {
    getMovieDetailsFromIMDB: function() {
      return Observable.of({
        results: [
          { id: 1, poster_path: '/abc', favorite: true},
          { id: 2, poster_path: '/def', favorite: false}
      ],
      });
    },
    storeMovies: jasmine.createSpy(),
  };

  let MockRouter = {
    navigate: jasmine.createSpy(),
  };

  //Mock service for router.
  class RouterStub {
    navigate(params) {}
  }

  //Mock service for Activated route.
  class ActivatedRouteStub {
    params: Observable<any> = Observable.empty();
  }

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MovieHomeComponent],
        providers: [
          { provide: Router, useValue: MockRouter },
          { provide: ActivatedRoute, useClass: ActivatedRouteStub },
          { provide: MovieService, useValue: MockMovieService },
        ],
        schemas: [NO_ERRORS_SCHEMA],
        imports: [HttpClientModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHomeComponent);
    component = fixture.componentInstance;
  });

  it('should have empty movieData before service call', () => {
    expect(component.movieData).toBeUndefined();
  });

  it('should have populated movieData after ngOnInit', () => {

    let data = [
      { id: 1, poster_path: 'https://image.tmdb.org/t/p/w342/abc', favorite: false },
      { id: 2, poster_path: 'https://image.tmdb.org/t/p/w342/def', favorite: false }
    ];

    component.ngOnInit();
    component.movieData = data;
    // toBe - exact same value ( primitives )
    // toEqual - reference type
    expect(component.movieData).toEqual( [
      { id: 1, poster_path: 'https://image.tmdb.org/t/p/w342/abc', favorite: false },
      { id: 2, poster_path: 'https://image.tmdb.org/t/p/w342/def', favorite: false }
    ]);
    expect(MockMovieService.storeMovies).toHaveBeenCalledWith(
      component.movieData
    );
  });

  it('should navigate to respective movie ID', () => {
    component.selectTile({ id: 6, title: 'something' });
    expect(MockRouter.navigate).toHaveBeenCalledWith([6], {
      relativeTo: jasmine.any(ActivatedRouteStub),
    });
  });
});
