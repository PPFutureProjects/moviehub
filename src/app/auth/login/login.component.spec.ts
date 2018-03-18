import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA ,  Component, DebugElement} from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';

let AuthServiceStub = {
  login: jasmine.createSpy()
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: AuthService, useValue: AuthServiceStub }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a form with 2 controls', () => {
    expect( component.loginForm.get('email')).toBeTruthy();
    expect( component.loginForm.get('password')).toBeTruthy();
  });

  it('should have email validate to false if empty', () => {
    let ctrl = component.loginForm.get('email');
    ctrl.setValue('');
    expect(ctrl.valid).toBeFalsy();
  });

  it('should have submitted the form on button click', () => {
    component.loginForm.setValue({
      email: 'abcde@gmail.com', password: 'abcde1234'
    })
    component.onSubmit();
    expect(AuthServiceStub.login).toHaveBeenCalled();
    expect(AuthServiceStub.login).toHaveBeenCalledWith({
      email: 'abcde@gmail.com', password: 'abcde1234'
    })
  });

});
