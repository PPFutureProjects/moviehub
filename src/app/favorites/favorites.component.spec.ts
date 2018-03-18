import { MovieService } from './../movie-home/movie.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { FavoritesComponent } from './favorites.component';
import { Observable } from 'rxjs';

let MovieServiceStub = {
  showfavorites: function() {
    return [
      { id: 1, title: 'a' },
      { id: 2, title: 'b' },
      { id: 3, title: 'c' },
    ];
  },
};

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FavoritesComponent],
        providers: [{ provide: MovieService, useValue: MovieServiceStub }],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
  });

  it('should have no favorites before onInit', () => {
    expect(component.favArray.length).toBe(0);
  });

  it('should populate the favorites array after onInit', () => {
    component.ngOnInit();
    expect(component.favArray.length).toBe(3);
    expect(component.favArray).toEqual([
      { id: 1, title: 'a' },
      { id: 2, title: 'b' },
      { id: 3, title: 'c' },
    ]);
  });
});
