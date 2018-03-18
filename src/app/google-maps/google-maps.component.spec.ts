import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { GoogleMapsComponent } from './google-maps.component';

describe('GoogleMapsComponent', () => {
  let component: GoogleMapsComponent;
  let fixture: ComponentFixture<GoogleMapsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GoogleMapsComponent],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create google map component', () => {
    expect(component).toBeTruthy();
  });

  it('should show default coordinates', () => {
    expect(component.lat).toBe(43.683334);
    expect(component.lng).toBe(-79.76667);
    expect(component.zoom).toBe(15);
    expect(component.locationChosen).toBeFalsy();
  });

  it('should show selected coordinates', () => {
    let evt = {
      coords: { lat: 5, lng: 6 },
    };

    component.onChoseLocation(evt);
    expect(component.lat).toBe(evt.coords.lat);
    expect(component.lng).toBe(evt.coords.lng);
    expect(component.locationChosen).toBeTruthy();
  });
});
