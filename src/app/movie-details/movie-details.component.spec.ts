import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieService } from '../movie-home/movie.service';
import { ActivatedRoute } from '@angular/router';

let MovieServiceStub = {
  getMovieDetailForID: function() {
    return [{ id: 5, title: 'test' }];
  },
  addTofavorites: jasmine.createSpy(),
};

let RouterStub = {
  snapshot: {
    params: {
      id: '5',
    },
  },
};

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MovieDetailsComponent],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [
          { provide: MovieService, useValue: MovieServiceStub },
          { provide: ActivatedRoute, useValue: RouterStub },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the corresponding movie detail ID', () => {
    component.ngOnInit();
    expect(component.currentId).toBe(+RouterStub.snapshot.params.id);
  });

  it('should show the corresponding movie detail', () => {
    component.ngOnInit();
    expect(component.selectedMovie).toEqual({ id: 5, title: 'test' });
  });

  it('should save the movie to the favorite array', () => {
    let movie = { id: 1, title: 'test2' };
    component.addToFavorites(movie);
    expect(MovieServiceStub.addTofavorites).toHaveBeenCalledWith(movie);
  });
});
