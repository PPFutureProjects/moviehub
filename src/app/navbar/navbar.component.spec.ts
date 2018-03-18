import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

//Stubbing the service dependencies.
class AngularFireAuthStub {}
class MatSnackBarStub {}

describe('NavComponent tests', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let service: AuthService;
  let rootElement: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarComponent],
        providers: [
          AuthService,
          { provide: AngularFireAuth, useClass: AngularFireAuthStub },
          { provide: MatSnackBar, useClass: MatSnackBarStub },
        ],
        schemas: [NO_ERRORS_SCHEMA], // hide any element-not-found errors.
        imports: [RouterTestingModule.withRoutes([])],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the NavBar component', () => {
    expect(component).toBeTruthy();
  });

  it('should have link to / ', () => {
    fixture.detectChanges();
    let debugEls = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    let index = debugEls.findIndex(de => de.properties['href'] === '/');
    expect(index).toBeGreaterThan(-1);
  });

  /**
   * We can use the same logic to write cases for Login/Logout too
   * Just need to copy paste both + / - cases.
   */

  it('should not have link to Movies if authentication is false ', () => {
    fixture.detectChanges();
    let debugEls = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    let index = debugEls.findIndex(de => de.properties['href'] === '/movies');
    expect(index).toBe(-1);
  });

  it('should have link to Movies if authentication is true ', () => {
    component.auth = true;
    fixture.detectChanges();
    let debugEls = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    let index = debugEls.findIndex(de => de.properties['href'] === '/movies');
    expect(index).toBeGreaterThan(-1);
  });

  it('should not have link to Favorites if authentication is false ', () => {
    fixture.detectChanges();
    let debugEls = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    let index = debugEls.findIndex(
      de => de.properties['href'] === '/movies/favorites'
    );
    expect(index).toBe(-1);
  });

  it('should have link to Favorites if authentication is true ', () => {
    component.auth = true;
    fixture.detectChanges();
    let debugEls = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    let index = debugEls.findIndex(
      de => de.properties['href'] === '/movies/favorites'
    );
    expect(index).toBeGreaterThan(-1);
  });
});
