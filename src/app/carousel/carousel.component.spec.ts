import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { carousel } from '../welcome/welcome.component.data';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CarouselComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
  });

  it('should create carousel component.', () => {
    expect(component).toBeTruthy();
  });

  it('should not have any carousel items before load.', () => {
    expect(component.imgags).toBeUndefined();
  });

  it('should have  carousel items loaded after onInit.', () => {
    fixture.detectChanges();
    expect(component.imgags).toBeDefined();
    expect(component.imgags).toEqual(carousel);
  });
});
